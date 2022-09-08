import LoginRequestDTO from "../../dtos/request/auth/LoginRequestDTO";
declare class AuthValidation {
    loginValidation: (params: LoginRequestDTO) => any[];
}
declare const authValidation: AuthValidation;
export default authValidation;
