"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const file_1 = require("../../constants/file");
const fileMiddleWare = {
    fileExtLimiter: (allowedExtArray) => {
        return (req, res, next) => {
            const files = req.files;
            const fileExtensions = [];
            Object.keys(files).forEach((key) => {
                fileExtensions.push(path_1.default.extname(files[key].name));
            });
            // Are the file extension allowed?
            const allowed = fileExtensions.every((ext) => allowedExtArray.includes(ext));
            if (!allowed) {
                const message = `Không thể tải file. Chỉ chấp nhận các định dạng sau đây: ${allowedExtArray.toString()}.`.replaceAll(",", ", ");
                return res.status(422).json({ status: "error", message });
            }
            next();
        };
    },
    fileSizeLimiter: (req, res, next) => {
        const files = req.files;
        const filesOverLimit = [];
        // Which files are over the limit?
        Object.keys(files).forEach((key) => {
            if (files[key].size > file_1.FILE_SIZE_LIMIT) {
                filesOverLimit.push(files[key].name);
            }
        });
        if (filesOverLimit.length) {
            const properVerb = filesOverLimit.length > 1 ? "are" : "is";
            const sentence = `Không thể tải file. ${filesOverLimit.toString()} ${properVerb} vượt quá mức dung lượng cho phép: ${file_1.MB} MB.`.replaceAll(",", ", ");
            const message = filesOverLimit.length < 3
                ? sentence.replace(",", " and")
                : sentence.replace(/,(?=[^,]*$)/, " and");
            return res.status(413).json({ status: "error", message });
        }
        next();
    },
    filesPayloadExists: (req, res, next) => {
        if (!req.files)
            return res
                .status(400)
                .json({ status: "error", message: "Vui lòng chọn file" });
        next();
    },
};
exports.default = fileMiddleWare;
//# sourceMappingURL=fileMiddleWare.js.map