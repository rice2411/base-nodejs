import nodemailer from "nodemailer";
import { IMailService } from "./interface";
import env from "../../../config/env";

const mailService: IMailService = {
  sendMail: async (request) => {
    try {
      const transporter = nodemailer.createTransport({
        service: env.mail.service,
        auth: {
          user: env.mail.root,
          pass: env.mail.key,
        },
      });
      await transporter.sendMail({
        from: env.mail.root,
        to: request.email,
        ...request.options,
      });
      return Promise.resolve({
        message: "Yêu cầu thành công! Vui lòng kiểm tra hộp thư của bạn",
      });
    } catch (err) {
      return Promise.reject({
        message: err.message,
      });
    }
  },
};

export default mailService;
