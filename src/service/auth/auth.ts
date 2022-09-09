import LoginRequestDTO from "../../dtos/request/auth/LoginRequestDTO";
import RegisterRequestDTO from "../../dtos/request/auth/RegisterRequestDTO";
import CreateUserResponseDTO from "../../dtos/response/user/CreateUserResponseDTO";
import UserResponseDTO from "../../dtos/response/user/UserResponseDTO";
import ForgotPasswordRequestDTO from '../../dtos/request/auth/ForgotPasswordRequestDTO'
import PasswordHash from "../../helpers/PasswordHash";
import { User } from "../../models/user";
import { userService } from "../user";
import { AuthErrorMessageService } from "./errorMessage";
import { IAuthService } from './interface'
import { Otp } from '../../models/index'
import {SALT_ROUNDS} from '../../constants/bcrypt'
import bcrypt from 'bcrypt'
import { generateOtp } from "../helper/otp";
import mailService from '../mail/index'
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
    const isValid = PasswordHash.verify(
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
  forgotPassword: async( forgotPasswordRequestDTO : ForgotPasswordRequestDTO ) => {
    const user = await User.findOne({email: forgotPasswordRequestDTO.email})
    if(!user) throw new Error(AuthErrorMessageService.USERNAME_IS_NOT_EXIST)
    const otpGenarate = generateOtp()
    const otp = await Otp.create({
      userId: user._id, 
      otp: await bcrypt.hash(otpGenarate, SALT_ROUNDS)
    })
    const sendMailRequestDTO = new SendMailRequestDTO({
      email: user.email,
      otp: otpGenarate
    })
    const response = mailService.sendMail(sendMailRequestDTO)
    return response
  }
};

export { authService };
