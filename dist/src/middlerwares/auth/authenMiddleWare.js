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
const ApiResponse_1 = require("../../helpers/ApiResponse");
const ApiResponseCode_1 = require("../../helpers/ApiResponseCode");
const user_1 = require("../../models/user");
const token_1 = require("../../service/helper/token");
const user_2 = require("../../service/user");
const authMiddleWare = {
    requireLogin: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.headers.authorization) {
            return res.errors("Yêu cầu đăng nhập.", 400);
        }
        try {
            const header = req.headers.authorization.split(" ")[0].trim();
            if (header !== "Bearer")
                return res.errors("Mã token không đúng.");
            const token = req.headers.authorization.split(" ")[1].trim();
            const info = token_1.tokenService.verifyToken(token, env_1.default.jwtSecret);
            if (!info)
                return res.errors("Mã token không đúng.");
            const user = yield user_2.userService.get(info._id);
            next();
        }
        catch (error) {
            if (error.message == "jwt expired") {
                res.errors("Yêu cầu đăng nhập.", 401);
            }
            next(error);
        }
    }),
    checkUserBan: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_1.User.findById(req === null || req === void 0 ? void 0 : req.user._id);
            if (!user.is_active) {
                const apiResponse = new ApiResponse_1.ApiResponse(ApiResponseCode_1.ResponseCodes.unauthorized, "Unauthorized", null);
                return res.status(401).json(apiResponse);
            }
            next();
        }
        catch (error) { }
    }),
};
exports.default = authMiddleWare;
//# sourceMappingURL=authenMiddleWare.js.map