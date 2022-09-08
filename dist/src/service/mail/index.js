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
const nodemailer_1 = __importDefault(require("nodemailer"));
const env_1 = __importDefault(require("../../../config/env"));
const mailService = {
    sendMail: (request) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const transporter = nodemailer_1.default.createTransport({
                service: env_1.default.mail.service,
                auth: {
                    user: env_1.default.mail.root,
                    pass: env_1.default.mail.key,
                },
            });
            yield transporter.sendMail({
                from: env_1.default.mail.root,
                to: request.email,
                subject: "TEST",
                html: "</h1>TEST EMAIL</>",
            });
            return Promise.resolve({
                message: "Yêu cầu thành công! Vui lòng check hộp thư của bạn",
            });
        }
        catch (err) {
            return Promise.reject({
                message: err.message,
            });
        }
    }),
};
exports.default = mailService;
//# sourceMappingURL=index.js.map