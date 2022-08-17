import LoginRequestDTO from "../../dtos/request/auth/LoginRequestDTO";
import * as validationUtils from "../publics/utils";

const USERNAME_IS_REQUIRED = "Vui lòng nhập tên đăng nhập.";
const PASSWORD_IS_REQUIRED = "Vui lòng nhập mật khẩu.";

class AuthValidation {
  public loginValidation = (params: LoginRequestDTO): any[] => {
    const errors = [];

    if (validationUtils.isBlank(params.username)) {
      errors.push(USERNAME_IS_REQUIRED);
    }
    if (validationUtils.isBlank(params.password)) {
      errors.push(PASSWORD_IS_REQUIRED);
    }

    return errors;
  };
}

const authValidation = new AuthValidation();
export default authValidation;
