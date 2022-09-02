import RegisterRequestDTO from "../../dtos/request/auth/RegisterRequestDTO";
import { IUpdateUserRequestDTO } from "../../dtos/request/user/UpdateUserRequestDTO";
import * as validationUtils from "../publics/utils";

const ERROR = {
  USERNAME_IS_REQUIRED: "Vui lòng nhập tên đăng nhập.",
  PASSWORD_IS_REQUIRED: "Vui lòng nhập mật khẩu.",
  PASSWORD_TOO_SHORT: "Mật khẩu phải có ít nhất 6 kí tự",
};
class UserValidation {
  public registerRequest = (params: RegisterRequestDTO): any[] => {
    const errors = [];
    if (validationUtils.isBlank(params._username)) {
      errors.push(ERROR.USERNAME_IS_REQUIRED);
    }
    if (validationUtils.isBlank(params._password)) {
      errors.push(ERROR.PASSWORD_IS_REQUIRED);
    }
    if (params._password.length < 6) {
      errors.push(ERROR.PASSWORD_TOO_SHORT);
    }
    return errors;
  };
  public updateUserReqest = (params: IUpdateUserRequestDTO): any[] => {
    const errors = [];
    if (validationUtils.isBlank(params.username)) {
      errors.push(ERROR.USERNAME_IS_REQUIRED);
    }
    return errors;
  };
}

const userValidation = new UserValidation();
export default userValidation;
