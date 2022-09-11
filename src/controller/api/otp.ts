import env from "../../../config/env";

import { authService } from "../../service/auth/auth";

import GetMailOTPRequestDTO from "../../dtos/request/auth/GetMailOTPRequestDTO";
import OTPRequestDTO from "../../dtos/request/auth/OTPRequestDTO";
import tokenService from "../../service/token";
import TokenDataResponseDTO from "../../dtos/response/token/TokenDataResponseDTO";

import { BaseSuccesMessage } from "../../messages/success/base";

const otpController = {
  sendMail: async (req, res, next) => {
    try {
      const getMailDTORequest = new GetMailOTPRequestDTO(req.query);
      const OTPResponse = await authService.sendMailOTP(getMailDTORequest);
      return res.success(BaseSuccesMessage.SUCCESS, OTPResponse);
    } catch (error) {
      next(error);
    }
  },
  verify: async (req, res, next) => {
    try {
      const OTPRequest = new OTPRequestDTO(req.body);
      const OTPResponse = await authService.verifyOTP(OTPRequest);
      const payload = {
        data: OTPResponse,
        secret: env.otp.secret,
        expire_in: env.otp.expiresIn,
      };
      const tokenData = new TokenDataResponseDTO(payload);
      const tokenResult = tokenService.generateToken(tokenData);
      return res.success(BaseSuccesMessage.SUCCESS, tokenResult);
    } catch (error) {
      next(error);
    }
  },
};

export default otpController;
