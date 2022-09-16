import { BaseSuccesMessage } from "../../messages/success/base";
import env from "../../../config/env";

import oauth2Service from "../../service/oauth2";
import TokenDataResponseDTO from "../../dtos/response/token/TokenDataResponseDTO";
import tokenService from "../../service/token";

const oauth2Controller = {
  success: async (req, res, next) => {
    try {
      const data = req.user;
      const app_host = env.app_host;
      await oauth2Service.success(data);
      return res.redirect(
        `${app_host}/oauth2/id=${data.id}?provider=${data.provider}`
      );
    } catch (err) {
      next(err);
    }
  },
  login: async (req, res, next) => {
    try {
      const data = req.body;
      const response = await oauth2Service.success(data);
      const secret = env.jwt.secret;
      const expire_in = env.jwt.expiresIn;
      const payload = {
        data: response._doc,
        secret: secret,
        expire_in: expire_in,
      };
      const tokenData = new TokenDataResponseDTO(payload);
      const tokenResult = tokenService.generateToken(tokenData);
      return res.success(BaseSuccesMessage.SUCCESS, tokenResult);
    } catch (err) {
      next(err);
    }
  },
};

export default oauth2Controller;
