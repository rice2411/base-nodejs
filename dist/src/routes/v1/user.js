"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const role_1 = require("../../constants/role");
const user_1 = __importDefault(require("../../controller/api/user"));
const authenMiddleWare_1 = __importDefault(require("../../middlerwares/auth/authenMiddleWare"));
const authorMiddleWare_1 = __importDefault(require("../../middlerwares/auth/authorMiddleWare"));
const router = express.Router({ mergeParams: true });
router.route("/").get(authenMiddleWare_1.default.requireLogin, user_1.default.list);
router.route("/get-me").get(authenMiddleWare_1.default.requireLogin, user_1.default.get_me);
router
    .route("/import-list")
    .post(authenMiddleWare_1.default.requireLogin, authorMiddleWare_1.default.checkUserRole(role_1.ROLE.ROOT), user_1.default.importListUser);
router
    .route("/remove-test-data")
    .delete(authenMiddleWare_1.default.requireLogin, authorMiddleWare_1.default.checkUserRole(), user_1.default.removeDataTest);
router
    .route("/deactive")
    .delete(authenMiddleWare_1.default.requireLogin, authorMiddleWare_1.default.checkUserRole(role_1.ROLE.ADMIN), user_1.default.deactive);
router
    .route("/:userId")
    .get(authenMiddleWare_1.default.requireLogin, user_1.default.get)
    .put((0, express_fileupload_1.default)({ createParentPath: true }), authenMiddleWare_1.default.requireLogin, user_1.default.update);
exports.default = router;
//# sourceMappingURL=user.js.map