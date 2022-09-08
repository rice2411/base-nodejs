"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const env_1 = __importDefault(require("../../../config/env"));
const tokenService = {
    createToken: (iUserTokenInfo) => {
        const secret = env_1.default.jwtSecret;
        const expireIn = env_1.default.expiresIn;
        const generateInfo = Object.assign(Object.assign({}, iUserTokenInfo), { secret, expire_in: expireIn });
        const token = tokenService.generate(generateInfo);
        return {
            username: generateInfo.username,
            role: generateInfo.role,
            token,
        };
    },
    generate: (iGenerateInfo) => {
        const token = (0, jsonwebtoken_1.sign)({
            _id: iGenerateInfo._id,
            username: iGenerateInfo.username,
        }, iGenerateInfo.secret, {
            expiresIn: iGenerateInfo.expire_in,
        });
        return token;
    },
    verifyToken: (token, secret) => {
        const verified = (0, jsonwebtoken_1.verify)(token, secret);
        return verified;
    },
};
exports.tokenService = tokenService;
//# sourceMappingURL=token.js.map