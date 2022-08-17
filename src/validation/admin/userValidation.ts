import RegisterRequestDTO from "../../dtos/request/auth/RegisterRequestDTO";
import { IUpdateUserRequestDTO } from "../../dtos/request/user/UpdateUserRequestDTO";
import * as validationUtils from "../publics/utils";

const USERNAME_IS_REQUIRED = "Vui lòng nhập tên đăng nhập.";

const PASSWORD_IS_REQUIRED = "Vui lòng nhập mật khẩu.";

class UserValidation {
  public registerRequest = (params: RegisterRequestDTO): any[] => {
    const errors = [];
    if (validationUtils.isBlank(params._username)) {
      errors.push(USERNAME_IS_REQUIRED);
    }
    if (validationUtils.isBlank(params._password)) {
      errors.push(PASSWORD_IS_REQUIRED);
    }
    return errors;
  };
  public updateUserReqest = (params: IUpdateUserRequestDTO): any[] => {
    const errors = [];
    if (validationUtils.isBlank(params.username)) {
      errors.push(USERNAME_IS_REQUIRED);
    }
    return errors;
  };
}

const userValidation = new UserValidation();
export default userValidation;
