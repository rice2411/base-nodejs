import LoginRequestDTO from "../../dtos/request/auth/LoginRequestDTO";
import RegisterRequestDTO from "../../dtos/request/auth/RegisterRequestDTO";

import UserResponseDTO from "../../dtos/response/user/UserResponseDTO";
import ForgotPasswordRequestDTO from "../../dtos/request/auth/GetMailOTPRequestDTO";
import HashFunction from "../../helpers/HashFunction";
import { User } from "../../models/user";
import { userService } from "../user";
import { AuthErrorMessage } from "../../messages/error/auth";
import { IAuthService } from "./interface";
import { OTP } from "../../models/index";
import { generateOtp } from "../helper/otp";
import mailService from "../mail/index";
import MAIL_TEMPLATE from "../../constants/mail";

import SendMailRequestDTO from "../../dtos/request/mail/SendMailRequestDTO";
import { addMinutes } from "../helper/date";
import { OTP_CONFIG } from "../../constants/OTP";
import VerifyTokenResponseDTO from "../../dtos/response/otp/VerifyTokenResponseDTO";
import { Error } from "mongoose";
import { AuthSuccessMessage } from "../../messages/success/auth";

const authService: IAuthService = {
  login: async (loginRequestDTO: LoginRequestDTO) => {
    // Check user is in DB
    const user = await User.findOne({
      username: loginRequestDTO.username,
    });
    if (!user) throw new Error(AuthErrorMessage.USERNAME_IS_NOT_EXIST);
    // Check user is active ( block or not block )
    if (!user.is_active) throw new Error(AuthErrorMessage.ACCOUNT_IS_LOCK);
    // Check password is correct
    const isValid = HashFunction.verify(
      loginRequestDTO.password,
      user.password
    );
    if (!isValid) throw new Error(AuthErrorMessage.PASSWORD_NOT_MATCH);
    // Login success
    const response = new UserResponseDTO().responseDTO(user);
    return response;
  },
  register: async (registerRequestDTO: RegisterRequestDTO) => {
    //Check username is exist in DB
    const response = await userService.create(registerRequestDTO);
    return response;
  },
  sendMailOTP: async (forgotPasswordRequestDTO: ForgotPasswordRequestDTO) => {
    try {
      const userEmail = forgotPasswordRequestDTO.email;
      const user = await User.findOne({ email: userEmail });
      if (!user)
        return Promise.reject(new Error(AuthErrorMessage.EMAIL_IS_NOT_EXIST));

      if (!user.email_verified)
        return Promise.reject(
          new Error(AuthErrorMessage.EMAIL_IS_NOT_VERIFIED)
        );

      const otp = await OTP.findOne({ email: userEmail });
      const otpGenarate = generateOtp();

      if (otp) {
        otp.otp = await HashFunction.generate(otpGenarate);
        await otp.save();
      } else {
        await OTP.create({
          email: userEmail,
          otp: await HashFunction.generate(otpGenarate),
        });
      }

      const templateMail = MAIL_TEMPLATE.OTP_TEMPLATE(otpGenarate);

      const options = {
        email: userEmail,
        options: templateMail,
      };

      const sendMailOTPRequestDTO = new SendMailRequestDTO(options);

      const response = await mailService.sendMail(sendMailOTPRequestDTO);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  verifyOTP: async (OTPRequest) => {
    try {
      const otp = await OTP.findOne({ email: OTPRequest.email });

      if (!otp) return Promise.reject(AuthErrorMessage.EMAIL_IS_NOT_EXIST);

      let lifeTimeOTP = addMinutes(
        new Date(otp.updatedAt.toString()),
        OTP_CONFIG.lifeTime
      );
      if (lifeTimeOTP.getTime() < new Date().getTime())
        return Promise.reject(AuthErrorMessage.EXPIRED_OTP);

      if (!HashFunction.verify(OTPRequest.otp, otp.otp))
        return Promise.reject(AuthErrorMessage.OTP_NOT_MATCH);

      return Promise.resolve(
        new VerifyTokenResponseDTO({ email: OTPRequest.email })
      );
    } catch (error) {
      return Promise.reject(error);
    }
  },
  resetPassword: async (resetPasswordDTO) => {
    try {
      const user = await User.findOne({ email: resetPasswordDTO._email });

      if (!user) return Promise.reject(AuthErrorMessage.EMAIL_IS_NOT_EXIST);

      user.password = await HashFunction.generate(resetPasswordDTO._password);
      user.save();

      await OTP.deleteOne({ email: resetPasswordDTO._email });

      return Promise.resolve(AuthSuccessMessage.RESET_PASSWORD_SUCCESS);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export { authService };
