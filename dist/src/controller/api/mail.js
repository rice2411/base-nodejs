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
const SendMailRequestDTO_1 = __importDefault(require("../../dtos/request/mail/SendMailRequestDTO"));
const mail_1 = __importDefault(require("../../service/mail"));
const mailController = {
    sendmail: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const request = new SendMailRequestDTO_1.default(req.body);
            const result = yield mail_1.default.sendMail(request);
            return res.success("OK", result);
        }
        catch (err) {
            next(err);
        }
    }),
};
exports.default = mailController;
//# sourceMappingURL=mail.js.map