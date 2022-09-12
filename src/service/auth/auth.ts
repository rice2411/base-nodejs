import LoginRequestDTO from "../../dtos/request/auth/LoginRequestDTO";
import RegisterRequestDTO from "../../dtos/request/auth/RegisterRequestDTO";

import UserResponseDTO from "../../dtos/response/user/UserResponseDTO";

import HashFunction from "../../helpers/HashFunction";
import { User } from "../../models/user";
import { userService } from "../user";
import { AuthErrorMessage } from "../../messages/error/auth";
import { IAuthService } from "./interface";
import { OTP } from "../../models/index";

import { Error } from "mongoose";
import { AuthSuccessMessage } from "../../messages/success/auth";

const authService: IAuthService = {
  login: async (loginRequestDTO: LoginRequestDTO) => {
    // Check user is in DB
    const user = await User.findOne({
      username: loginRequestDTO.username,
    });
    if (!user) throw new Error(AuthErrorMessage.USERNAME_IS_NOT_EXIST);
    // Check user is active ( block or not block )
    if (!user.is_active) throw new Error(AuthErrorMessage.ACCOUNT_IS_LOCK);
    // Check password is correct
    const isValid = HashFunction.verify(
      loginRequestDTO.password,
      user.password
    );
    if (!isValid) throw new Error(AuthErrorMessage.PASSWORD_NOT_MATCH);
    // Login success
    const response = new UserResponseDTO().responseDTO(user);
    return response;
  },
  register: async (registerRequestDTO: RegisterRequestDTO) => {
    //Check username is exist in DB
    const response = await userService.create(registerRequestDTO);
    return response;
  },

  resetPassword: async (resetPasswordDTO) => {
    try {
      const user = await User.findOne({ email: resetPasswordDTO._email });

      if (!user) return Promise.reject(AuthErrorMessage.EMAIL_IS_NOT_EXIST);

      user.password = await HashFunction.generate(resetPasswordDTO._password);
      user.save();

      await OTP.deleteOne({ email: resetPasswordDTO._email });

      return Promise.resolve(AuthSuccessMessage.RESET_PASSWORD_SUCCESS);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export { authService };
