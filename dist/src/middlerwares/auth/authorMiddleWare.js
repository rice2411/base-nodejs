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
Object.defineProperty(exports, "__esModule", { value: true });
const role_1 = require("../../constants/role");
const user_1 = require("../../service/user");
const authorMiddleWare = {
    checkUserRole: (role = 0) => {
        return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const user = yield user_1.userService.get_me(req);
                if (user) {
                    if (role == user.role || user.role == role_1.ROLE.ROOT) {
                        next();
                    }
                    else {
                        const error = new Error("Người dùng không có quyền truy cập.");
                        next(error);
                    }
                }
            }
            catch (error) {
                if (error.message == "jwt expired") {
                    res.errors("Yêu cầu đăng nhập.", 401);
                }
                next(error);
            }
        });
    },
};
exports.default = authorMiddleWare;
//# sourceMappingURL=authorMiddleWare.js.map