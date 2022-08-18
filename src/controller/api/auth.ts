import LoginRequestDTO from "../../dtos/request/auth/LoginRequestDTO";
import RegisterRequestDTO from "../../dtos/request/auth/RegisterRequestDTO";
import { authService } from "../../service/auth/auth";
import { tokenService } from "../../service/helper/token";
import authValidation from "../../validation/admin/authValidation";
import userValidation from "../../validation/admin/userValidation";

const authController = {
  login: async (req, res, next) => {
    try {
      const loginRequest = new LoginRequestDTO(req.body);
      const validateErrors = authValidation.loginValidation(loginRequest);
      if (validateErrors.length) return res.errors(validateErrors?.[0]);
      const userResponse = await authService.login(loginRequest);
      const tokenResult = tokenService.createToken(userResponse);
      return res.success("OK", tokenResult);
    } catch (error) {
      next(error);
    }
  },
  register: async (req, res, next) => {
    try {
      const registerRequest = new RegisterRequestDTO(req.body);
      const validErrors = userValidation.registerRequest(registerRequest);
      if (validErrors.length) return res.errors(validErrors[0], 400);
      const userResponse = await authService.register(registerRequest);
      return res.success("OK", userResponse);
    } catch (error) {
      next(error);
    }
  },
};

export default authController;