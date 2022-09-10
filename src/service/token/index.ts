import env from "../../../config/env";
import { sign, verify } from "jsonwebtoken";
import { ITokenService } from "./interface";
import TokenDataResponseDTO from "../../dtos/response/token/TokenDataResponseDTO";

const tokenService: ITokenService = {
  generateToken: (tokenData) => {
    const tokenPayload = new TokenDataResponseDTO({
      data: tokenData,
      secret: env.jwtSecret,
      expire_in: env.expiresIn,
    });

    const token = sign({ ...tokenPayload.data }, tokenPayload.secret, {
      expiresIn: tokenPayload.expire_in,
    });

    return { token: token };
  },
  verifyToken: (token, secret) => {
    return verify(token, secret);
  },
};

export default tokenService;
