"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("../../../config/env"));
const LoginRequestDTO_1 = __importDefault(require("../../dtos/request/auth/LoginRequestDTO"));
const RegisterRequestDTO_1 = __importDefault(require("../../dtos/request/auth/RegisterRequestDTO"));
const PasswordHash_1 = __importDefault(require("../../helpers/PasswordHash"));
const auth_1 = require("../../service/auth/auth");
const token_1 = require("../../service/helper/token");
const authValidation_1 = __importDefault(require("../../validation/admin/authValidation"));
const userValidation_1 = __importDefault(require("../../validation/admin/userValidation"));
const authController = {
    login: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const loginRequest = new LoginRequestDTO_1.default(req.body);
            const validateErrors = authValidation_1.default.loginValidation(loginRequest);
            if (validateErrors.length)
                return res.errors(validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors[0]);
            const userResponse = yield auth_1.authService.login(loginRequest);
            const tokenResult = token_1.tokenService.createToken(userResponse);
            return res.success("OK", tokenResult);
        }
        catch (error) {
            next(error);
        }
    }),
    register: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let registerRequest = new RegisterRequestDTO_1.default(req.body);
            const validErrors = userValidation_1.default.registerRequest(registerRequest);
            if (validErrors.length)
                return res.errors(validErrors[0], 400);
            registerRequest._password = PasswordHash_1.default.generate(registerRequest._password);
            const userResponse = yield auth_1.authService.register(registerRequest);
            return res.success("OK", userResponse);
        }
        catch (error) {
            next(error);
        }
    }),
    verifyToken: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.headers.authorization.split(" ")[1].trim();
            token_1.tokenService.verifyToken(token, env_1.default.jwtSecret);
            return res.success("OK");
        }
        catch (err) {
            return res.errors("JWT hết hạn", 401);
        }
    }),
};
exports.default = authController;
//# sourceMappingURL=auth.js.map