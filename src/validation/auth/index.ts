import LoginRequestDTO from "../../dtos/request/auth/LoginRequestDTO";
import * as validationUtils from "../../utils/utils";
import { AuthErrorMessageService } from "./error";

class AuthValidation {
  public loginValidation = (params: LoginRequestDTO): any[] => {
    const errors = [];

    if (validationUtils.isBlank(params.username)) {
      errors.push(AuthErrorMessageService.USERNAME_IS_REQUIRED);
    }
    if (validationUtils.isBlank(params.password)) {
      errors.push(AuthErrorMessageService.PASSWORD_IS_REQUIRED);
    }

    return errors;
  };
}

const authValidation = new AuthValidation();
export default authValidation;
