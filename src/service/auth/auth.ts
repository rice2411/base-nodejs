import LoginRequestDTO from "../../dtos/request/auth/LoginRequestDTO";
import RegisterRequestDTO from "../../dtos/request/auth/RegisterRequestDTO";
import CreateUserResponseDTO from "../../dtos/response/user/CreateUserResponseDTO";
import UserResponseDTO from "../../dtos/response/user/UserResponseDTO";
import PasswordHash from "../../helpers/PasswordHash";
import { User } from "../../models/user";
import { AuthErrorMessageService } from "./errorMessage";

interface IAuthService {
  login: (loginRequestDTO: LoginRequestDTO) => Promise<any>;
  register: (registerRequestDTO: RegisterRequestDTO) => Promise<any>;
}

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
    const userFound = await User.findOne({
      username: registerRequestDTO._username,
    });
    if (userFound) {
      throw new Error(AuthErrorMessageService.USERNAME_IS_EXIST);
    }
    const userCount = (await User.countDocuments()) + 1;
    // Register success
    const newUserDTO = new CreateUserResponseDTO().toJSON(registerRequestDTO);
    const newUser = {
      ...newUserDTO,
      firstname: "user" + userCount,
      lastname: "",
    };
    const user = new User(newUser);
    const userSave = await user.saveAsync();
    const response = new UserResponseDTO().responseDTO(userSave);
    return response;
  },
};

export { authService };
