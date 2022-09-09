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
        subject: "Xác nhận OTP",
        html: `</h1>Mã OTP của bạn là: ${request.otp} </>`,
      });
      return Promise.resolve({
        message: "Yêu cầu thành công! Vui lòng check hộp thư của bạn",
      });
    } catch (err) {
      return Promise.reject({
        message: err.message,
      });
    }
  },
};

export default mailService;
