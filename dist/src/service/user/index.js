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
exports.userService = void 0;
const UserResponseDTO_1 = __importDefault(require("../../dtos/response/user/UserResponseDTO"));
const queries_1 = require("../../queries");
const user_1 = require("./user");
const userService = {
    get: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield user_1.userBAL.get(id);
        const response = new UserResponseDTO_1.default().responseDTO(user);
        return response;
    }),
    list: (options) => __awaiter(void 0, void 0, void 0, function* () {
        const query = {
            is_active: true,
        };
        const users = yield queries_1.userQuery.getAllUser(query, options);
        return Promise.resolve(users);
    }),
    update: (request, userId) => __awaiter(void 0, void 0, void 0, function* () {
        // const validErrors = userValidation.updateUserReqest(request);
        // if (validErrors.length) return Promise.reject(new Error(validErrors[0]));
        let result = user_1.userBAL.update(request, userId);
        return Promise.resolve(result);
    }),
    deactive: (listUserId) => __awaiter(void 0, void 0, void 0, function* () {
        let result = user_1.userBAL.deactive(listUserId);
        return Promise.resolve(result);
    }),
    get_me: (req) => __awaiter(void 0, void 0, void 0, function* () {
        const user = user_1.userBAL.get_me(req);
        return Promise.resolve(user);
    }),
    removeDataTest: () => __awaiter(void 0, void 0, void 0, function* () {
        const result = user_1.userBAL.removeDataTest();
        return Promise.resolve(result);
    }),
    importListUser: (listUser) => __awaiter(void 0, void 0, void 0, function* () {
        const result = user_1.userBAL.importListUser(listUser);
        return Promise.resolve(result);
    }),
    create: (request) => __awaiter(void 0, void 0, void 0, function* () {
        const result = user_1.userBAL.create(request);
        return Promise.resolve(result);
    }),
};
exports.userService = userService;
//# sourceMappingURL=index.js.map