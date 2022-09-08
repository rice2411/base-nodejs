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
const user_1 = require("../../service/user");
const paging_1 = require("../../constants/paging");
const UpdateUserRequestDTO_1 = __importDefault(require("../../dtos/request/user/UpdateUserRequestDTO"));
const RegisterRequestDTO_1 = __importDefault(require("../../dtos/request/auth/RegisterRequestDTO"));
const userController = {
    list: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        try {
            const search = req === null || req === void 0 ? void 0 : req.query.search;
            const options = {
                page: (_a = req === null || req === void 0 ? void 0 : req.query.page) !== null && _a !== void 0 ? _a : paging_1.PAGING_DEFAULT.PAGE,
                limit: (_b = req === null || req === void 0 ? void 0 : req.query.limit) !== null && _b !== void 0 ? _b : paging_1.PAGING_DEFAULT.LIMIT,
                search,
                is_paginate: ((_c = req === null || req === void 0 ? void 0 : req.query) === null || _c === void 0 ? void 0 : _c.is_paginate) == false ||
                    ((_d = req === null || req === void 0 ? void 0 : req.query) === null || _d === void 0 ? void 0 : _d.is_paginate) == "false" ||
                    ((_e = req === null || req === void 0 ? void 0 : req.query) === null || _e === void 0 ? void 0 : _e.is_paginate) == 0
                    ? false
                    : true,
            };
            const result = yield user_1.userService.list(options);
            return res.success("OK", result);
        }
        catch (error) {
            next(error);
        }
    }),
    get: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const user = yield user_1.userService.get(userId);
            return res.success("OK", user);
        }
        catch (error) {
            next(error);
        }
    }),
    update: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const files = req.files;
            let params = {};
            if (files) {
                params = Object.assign(Object.assign({}, req.body), { avatarUpload: files });
            }
            else {
                params = Object.assign({}, req.body);
            }
            const requestUpdate = new UpdateUserRequestDTO_1.default().requestDTO(params);
            const updateUser = yield user_1.userService.update(requestUpdate, userId);
            return res.success("OK", updateUser);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    deactive: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const listUserId = req.body.listUserId;
            const updateUser = yield user_1.userService.deactive(listUserId);
            return res.success("Khoá tài khoản thành công", updateUser);
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }),
    get_me: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_1.userService.get_me(req);
            return res.success("OK", user);
        }
        catch (err) {
            console.log(err);
            next(err);
        }
    }),
    removeDataTest: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield user_1.userService.removeDataTest();
            return res.success("OK", null);
        }
        catch (err) {
            console.log(err);
            next(err);
        }
    }),
    importListUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { listUser } = req.body;
            let request = [];
            listUser.map((user) => {
                const newUser = new RegisterRequestDTO_1.default(user);
                request.push(newUser);
            });
            const result = yield user_1.userService.importListUser(request);
            return res.success("OK", result);
        }
        catch (err) {
            console.log(err);
            next(err);
        }
    }),
};
exports.default = userController;
//# sourceMappingURL=user.js.map