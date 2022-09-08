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
exports.userQuery = void 0;
const UserResponseDTO_1 = __importDefault(require("../dtos/response/user/UserResponseDTO"));
const PaginateResult_1 = require("../helpers/PaginateResult");
const user_1 = require("../models/user");
const userQuery = {
    getByCondition(searchParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.User.findOne(searchParams).lean().execAsync();
            return user;
        });
    },
    getAllUser(searchParams, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = searchParams;
            const searchQuery = options.search
                ? { $text: { $search: `\"${options.search}\"` } }
                : {};
            const sortQuery = { created_at: -1 };
            const aggregates = user_1.User.aggregate()
                .match(Object.assign(Object.assign({}, query), searchQuery))
                .sort(sortQuery);
            if (!!options.is_paginate) {
                const users = yield user_1.User.aggregatePaginateCustom(aggregates, {
                    page: options.page,
                    limit: options.limit,
                });
                users.docs = users === null || users === void 0 ? void 0 : users.docs.map((user) => new UserResponseDTO_1.default().responseDTO(user));
                const paginateResult = new PaginateResult_1.ApiPaginateResult(users).toRESPONSE();
                return paginateResult;
            }
            return aggregates;
        });
    },
    getById(searchParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = searchParams;
            const user = yield user_1.User.aggregate().match(Object.assign({}, query));
            return user.length ? user[0] : null;
        });
    },
};
exports.userQuery = userQuery;
//# sourceMappingURL=user.js.map