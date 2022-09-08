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
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const file_1 = require("../helper/file");
const fileService = {
    upload: (files) => __awaiter(void 0, void 0, void 0, function* () {
        let fileName = "";
        Object.keys(files).forEach((key) => {
            let extFile = path_1.default.extname(files[key].name);
            let savePath = (0, file_1.configFilePath)(extFile);
            fileName = (0, uuid_1.v4)() + extFile;
            const filepath = path_1.default.join(__dirname, "../..", savePath, fileName);
            files[key].mv(filepath, (err) => {
                if (err)
                    return Promise.reject({ status: "error", message: err });
            });
        });
        return Promise.resolve({
            status: "success",
            message: "Tải lên thành công",
            name: fileName,
        });
    }),
    get: (fileName, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const savePath = (0, file_1.configFilePath)(path_1.default.extname(fileName));
        res.sendFile(path_1.default.join(__dirname, "../..", savePath + fileName), (err) => {
            if (err) {
                next(err);
            }
        });
    }),
};
exports.default = fileService;
//# sourceMappingURL=file.js.map