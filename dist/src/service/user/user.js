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
exports.userBAL = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const _1 = require(".");
const env_1 = __importDefault(require("../../../config/env"));
const CreateUserResponseDTO_1 = __importDefault(require("../../dtos/response/user/CreateUserResponseDTO"));
const UserResponseDTO_1 = __importDefault(require("../../dtos/response/user/UserResponseDTO"));
const models_1 = require("../../models");
const queries_1 = require("../../queries");
const errorMessage_1 = require("../auth/errorMessage");
const file_1 = __importDefault(require("../file/file"));
const token_1 = require("../helper/token");
const userBAL = {
    get: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const query = { _id: new mongoose_1.default.Types.ObjectId(id), is_active: true };
        const user = yield queries_1.userQuery.getById(query);
        if (!user)
            throw new Error("Không tìm thấy.");
        return user;
    }),
    list: () => __awaiter(void 0, void 0, void 0, function* () { }),
    update: (request, userId) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield models_1.User.findOne({
            _id: new mongoose_1.default.Types.ObjectId(userId),
        });
        if (!user)
            return Promise.reject(new Error("Không tìm thấy người dùng."));
        if (request.firstname) {
            user.firstname = request.firstname;
        }
        if (request.lastname) {
            user.lastname = request.lastname;
        }
        if (request.avatarUpload) {
            const file = request.avatarUpload;
            const response = yield file_1.default.upload(file);
            if (response) {
                user.avatar = response.name;
            }
        }
        if (request.email) {
            const emailFound = yield models_1.User.findOne({
                email: request.email,
            });
            if (emailFound && user.email != request.email) {
                return Promise.reject(Error("Email này đã có người sử dụng!"));
            }
            user.email = request.email;
        }
        if (request.phoneNumber) {
            user.phoneNumber = request.phoneNumber;
        }
        const userUpdate = yield user.saveAsync();
        const response = new UserResponseDTO_1.default().responseDTO(userUpdate);
        return response;
    }),
    deactive: (listUserId) => __awaiter(void 0, void 0, void 0, function* () {
        yield Promise.all(listUserId.map((userId) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield models_1.User.findOne({
                _id: new mongoose_1.default.Types.ObjectId(userId),
            });
            if (!user)
                return Promise.reject(new Error("Không tìm thấy người dùng."));
            user.is_active = false;
            yield user.saveAsync();
        })));
        return "Khoá tài khoản thành công";
    }),
    get_me: (req) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.headers.authorization.split(" ")[1].trim();
            const info = token_1.tokenService.verifyToken(token, env_1.default.jwtSecret);
            const user = yield _1.userService.get(info._id);
            return user;
        }
        catch (err) {
            console.log(err);
        }
    }),
    removeDataTest: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield models_1.User.remove({
                username: { $nin: ["rice", "chou"] },
            });
            return result;
        }
        catch (err) {
            console.log(err);
        }
    }),
    importListUser: (listUser) => __awaiter(void 0, void 0, void 0, function* () {
        let canImport = true;
        yield Promise.all(listUser.map((user) => __awaiter(void 0, void 0, void 0, function* () {
            const userFound = yield models_1.User.findOne({ username: user.username });
            if (userFound) {
                canImport = false;
                return Promise.reject(new Error("Tên đăng nhập đã tồn tại"));
            }
        })));
        if (canImport) {
            yield Promise.all(listUser.map((user, index) => __awaiter(void 0, void 0, void 0, function* () {
                yield userBAL.create(user, index);
            })));
            return Promise.resolve({
                message: "Nhập dữ liệu thành công",
            });
        }
    }),
    create: (request, userCount) => __awaiter(void 0, void 0, void 0, function* () {
        const userFound = yield models_1.User.findOne({
            username: request._username,
        });
        if (userFound) {
            throw new Error(errorMessage_1.AuthErrorMessageService.USERNAME_IS_EXIST);
        }
        const userCountCurrent = userCount
            ? (yield models_1.User.countDocuments()) + 1 + userCount
            : (yield models_1.User.countDocuments()) + 1;
        // Register success
        const newUserDTO = new CreateUserResponseDTO_1.default().toJSON(request);
        const newUser = Object.assign(Object.assign({}, newUserDTO), { firstname: "user" + userCountCurrent, lastname: "" });
        const user = new models_1.User(newUser);
        const userSave = yield user.saveAsync();
        const response = new UserResponseDTO_1.default().responseDTO(userSave);
        return response;
    }),
};
exports.userBAL = userBAL;
//# sourceMappingURL=user.js.map