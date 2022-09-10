import env from "../../../config/env";
import { sign, verify } from "jsonwebtoken";
import { ITokenService } from "./interface";
import TokenDataResponseDTO from "../../dtos/response/token/TokenDataResponseDTO";

const tokenService: ITokenService = {
  generateToken: (tokenData) => {
    const tokenPayload = new TokenDataResponseDTO({
      data: tokenData,
      secret: tokenData.secret,
      expire_in: tokenData.expire_in,
    });

    const token = sign({ ...tokenPayload.data }, tokenPayload.secret, {
      expiresIn: tokenPayload.expire_in,
    });

    return { token: token };
  },
  verifyToken: (token, secret) => {
    const verified = verify(token, secret);
    return verified;
  },
};

export default tokenService;
