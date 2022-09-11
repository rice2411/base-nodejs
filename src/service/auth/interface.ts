import LoginRequestDTO from "../../dtos/request/auth/LoginRequestDTO";
import RegisterRequestDTO from "../../dtos/request/auth/RegisterRequestDTO";
import ForgotPasswordRequestDTO from "../../dtos/request/auth/GetMailOTPRequestDTO";
import OTPRequestDTO from "../../dtos/request/auth/OTPRequestDTO";
import ResetPasswordDTO from "../../dtos/request/auth/ResetPasswordDTO";

export interface IAuthService {
  login: (loginRequestDTO: LoginRequestDTO) => Promise<any>;
  register: (registerRequestDTO: RegisterRequestDTO) => Promise<any>;
  sendMailOTP: (
    forgotPasswordRequestDTO: ForgotPasswordRequestDTO
  ) => Promise<any>;
  verifyOTP: (OTPRequest: OTPRequestDTO) => Promise<any>;
  resetPassword: (resetPasswordDTO: ResetPasswordDTO) => Promise<any>;
}
