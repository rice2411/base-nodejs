import LoginRequestDTO from "../../dtos/request/auth/LoginRequestDTO";
import RegisterRequestDTO from "../../dtos/request/auth/RegisterRequestDTO";
interface IAuthService {
    login: (loginRequestDTO: LoginRequestDTO) => Promise<any>;
    register: (registerRequestDTO: RegisterRequestDTO) => Promise<any>;
}
declare const authService: IAuthService;
export { authService };
