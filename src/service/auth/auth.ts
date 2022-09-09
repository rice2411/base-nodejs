import LoginRequestDTO from "../../dtos/request/auth/LoginRequestDTO";
import RegisterRequestDTO from "../../dtos/request/auth/RegisterRequestDTO";
import CreateUserResponseDTO from "../../dtos/response/user/CreateUserResponseDTO";
import UserResponseDTO from "../../dtos/response/user/UserResponseDTO";
import ForgotPasswordRequestDTO from "../../dtos/request/auth/GetMailOTPRequestDTO";
import HashFunction from "../../helpers/HashFunction";
import { User } from "../../models/user";
import { userService } from "../user";
import { AuthErrorMessageService } from "./errorMessage";
import { IAuthService } from "./interface";
import { OTP } from "../../models/index";
import bcrypt from "bcrypt";
import { generateOtp } from "../helper/otp";
import mailService from "../mail/index";
import MAIL_TEMPLATE from "../../constants/mail";
import { options } from "joi";
import SendMailRequestDTO from "../../dtos/request/mail/SendMailRequestDTO";

const authService: IAuthService = {
  login: async (loginRequestDTO: LoginRequestDTO) => {
    // Check user is in DB
    const user = await User.findOne({
      username: loginRequestDTO.username,
    });
    if (!user) throw new Error(AuthErrorMessageService.USERNAME_IS_NOT_EXIST);
    // Check user is active ( block or not block )
    if (!user.is_active)
      throw new Error(AuthErrorMessageService.ACCOUNT_IS_LOCK);
    // Check password is correct
    const isValid = HashFunction.verify(
      loginRequestDTO.password,
      user.password
    );
    if (!isValid) throw new Error(AuthErrorMessageService.PASSWORD_NOT_MATCH);
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
    const userEmail = forgotPasswordRequestDTO.email;
    const user = await User.findOne({ email: userEmail });
    if (!user) throw new Error(AuthErrorMessageService.EMAIL_IS_NOT_EXIST);
    const otpGenarate = generateOtp();
    await OTP.create({
      userId: user._id,
      otp: await HashFunction.generate(otpGenarate),
    });

    const templateMail = MAIL_TEMPLATE.OTP_TEMPLATE(otpGenarate);

    const options = {
      email: userEmail,
      options: templateMail,
    };

    const sendMailOTPRequestDTO = new SendMailRequestDTO(options);

    const response = await mailService.sendMail(sendMailOTPRequestDTO);
    return response;
  },
  verifyOTP: async (OTPRequest) => {
    // const timeSubmit = Date.now();
    // const hash = HashFunction.generate(OTPRequest._otp);
    // const otp = await OTP.findOne(otp: HashFunction.verify(OTPRequest._otp,otp));
    return "OK";
  },
};

export { authService };
