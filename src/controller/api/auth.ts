import env from "../../../config/env";
import LoginRequestDTO from "../../dtos/request/auth/LoginRequestDTO";
import RegisterRequestDTO from "../../dtos/request/auth/RegisterRequestDTO";
import HashFunction from "../../helpers/HashFunction";
import { authService } from "../../service/auth/auth";

import authValidation from "../../validation/auth";
import userValidation from "../../validation/user";
import GetMailOTPRequestDTO from "../../dtos/request/auth/GetMailOTPRequestDTO";
import OTPRequestDTO from "../../dtos/request/auth/OTPRequestDTO";
import tokenService from "../../service/token";
import TokenDataResponseDTO from "../../dtos/response/token/TokenDataResponseDTO";

const authController = {
  login: async (req, res, next) => {
    try {
      const loginRequest = new LoginRequestDTO(req.body);
      const validateErrors = authValidation.loginValidation(loginRequest);
      if (validateErrors.length) return res.errors(validateErrors?.[0]);
      const userResponse = await authService.login(loginRequest);
      const payload = {
        data: userResponse,
        secret: env.jwtSecret,
        expire_in: env.expiresIn,
      };
      const tokenData = new TokenDataResponseDTO(payload);
      const tokenResult = tokenService.generateToken(tokenData);
      return res.success("OK", tokenResult);
    } catch (error) {
      next(error);
    }
  },
  register: async (req, res, next) => {
    try {
      let registerRequest = new RegisterRequestDTO(req.body);
      const validErrors = userValidation.registerRequest(registerRequest);
      if (validErrors.length) return res.errors(validErrors[0], 400);
      registerRequest._password = HashFunction.generate(
        registerRequest._password
      );
      const userResponse = await authService.register(registerRequest);
      return res.success("OK", userResponse);
    } catch (error) {
      next(error);
    }
  },
  verifyToken: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1].trim();
      tokenService.verifyToken(token, env.jwtSecret);
      return res.success("OK");
    } catch (err) {
      return res.errors("JWT hết hạn", 401);
    }
  },
  sendMailOTP: async (req, res, next) => {
    try {
      const getMailDTORequest = new GetMailOTPRequestDTO(req.body);
      const OTPResponse = await authService.sendMailOTP(getMailDTORequest);
      return res.success("OK", OTPResponse);
    } catch (error) {
      next(error);
    }
  },
  verifyOTP: async (req, res, next) => {
    try {
      const OTPRequest = new OTPRequestDTO(req.body);
      const OTPResponse = await authService.verifyOTP(OTPRequest);
      return res.success("OK", OTPResponse);
    } catch (error) {
      next(error);
    }
  },
};

export default authController;
