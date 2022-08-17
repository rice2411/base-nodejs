import { sign, verify } from "jsonwebtoken";
import env from "../../../config/env";

interface IUserTokenInfo {
  _id: string;
  username: string;
}

interface IGenerateInfo {
  _id: string;
  username: string;
  secret: any;
  expire_in: any;
}

interface ITokenService {
  generate: (iGenerateInfo: IGenerateInfo) => string;
  verifyToken: (token: string, secret: string) => any;
  createToken: (iUserTokenInfo: IUserTokenInfo) => any;
}

const tokenService: ITokenService = {
  createToken: (iUserTokenInfo) => {
    const secret = env.jwtSecret;
    const expireIn = env.expiresIn;
    const generateInfo: IGenerateInfo = {
      ...iUserTokenInfo,
      secret,
      expire_in: expireIn,
    };
    const token = tokenService.generate(generateInfo);

    return {
      username: generateInfo.username,
      token,
    };
  },

  generate: (iGenerateInfo) => {
    const token = sign(
      {
        _id: iGenerateInfo._id,
        username: iGenerateInfo.username,
      },
      iGenerateInfo.secret,
      {
        expiresIn: iGenerateInfo.expire_in,
      }
    );

    return token;
  },

  verifyToken: (token: string, secret: string) => {
    const verified: any = verify(token, secret);
    return verified;
  },
};

export { tokenService };
