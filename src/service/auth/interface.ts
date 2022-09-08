import LoginRequestDTO from "../../dtos/request/auth/LoginRequestDTO";
import RegisterRequestDTO from "../../dtos/request/auth/RegisterRequestDTO";
import ForgotPasswordRequestDTO from '../../dtos/request/auth/ForgotPasswordRequestDTO'

export interface IAuthService {
    login: (loginRequestDTO: LoginRequestDTO) => Promise<any>;
    register: (registerRequestDTO: RegisterRequestDTO) => Promise<any>;
    forgotPassword: (forgotPasswordRequestDTO: ForgotPasswordRequestDTO) => Promise<any>;
}