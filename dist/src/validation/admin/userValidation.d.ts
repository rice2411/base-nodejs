import RegisterRequestDTO from "../../dtos/request/auth/RegisterRequestDTO";
import { IUpdateUserRequestDTO } from "../../dtos/request/user/UpdateUserRequestDTO";
declare class UserValidation {
    registerRequest: (params: RegisterRequestDTO) => any[];
    updateUserReqest: (params: IUpdateUserRequestDTO) => any[];
}
declare const userValidation: UserValidation;
export default userValidation;
