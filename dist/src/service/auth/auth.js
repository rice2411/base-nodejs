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
exports.authService = void 0;
const UserResponseDTO_1 = __importDefault(require("../../dtos/response/user/UserResponseDTO"));
const PasswordHash_1 = __importDefault(require("../../helpers/PasswordHash"));
const user_1 = require("../../models/user");
const user_2 = require("../user");
const errorMessage_1 = require("./errorMessage");
const authService = {
    login: (loginRequestDTO) => __awaiter(void 0, void 0, void 0, function* () {
        // Check user is in DB
        const user = yield user_1.User.findOne({
            username: loginRequestDTO.username,
        });
        if (!user)
            throw new Error(errorMessage_1.AuthErrorMessageService.USERNAME_IS_NOT_EXIST);
        // Check user is active ( block or not block )
        if (!user.is_active)
            throw new Error(errorMessage_1.AuthErrorMessageService.ACCOUNT_IS_LOCK);
        // Check password is correct
        const isValid = PasswordHash_1.default.verify(loginRequestDTO.password, user.password);
        if (!isValid)
            throw new Error(errorMessage_1.AuthErrorMessageService.PASSWORD_NOT_MATCH);
        // Login success
        const response = new UserResponseDTO_1.default().responseDTO(user);
        return response;
    }),
    register: (registerRequestDTO) => __awaiter(void 0, void 0, void 0, function* () {
        //Check username is exist in DB
        const response = yield user_2.userService.create(registerRequestDTO);
        return response;
    }),
};
exports.authService = authService;
//# sourceMappingURL=auth.js.map