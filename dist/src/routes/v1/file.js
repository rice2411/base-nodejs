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
const file_1 = require("../../constants/file");
const file_2 = __importDefault(require("../../controller/api/file"));
const fileMiddleWare_1 = __importDefault(require("../../middlerwares/file/fileMiddleWare"));
const router = express.Router();
router
    .route("/")
    .post((0, express_fileupload_1.default)({ createParentPath: true }), fileMiddleWare_1.default.filesPayloadExists, fileMiddleWare_1.default.fileExtLimiter(file_1.ACCEPTED_FILE), fileMiddleWare_1.default.fileSizeLimiter, file_2.default.upload);
router.route("/:file").get(file_2.default.getFile);
exports.default = router;
//# sourceMappingURL=file.js.map