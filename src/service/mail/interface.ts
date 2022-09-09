import SendMailRequestDTO from "../../dtos/request/mail/SendMailRequestDTO";
import SendMailOTPRequestDTO from "../../dtos/request/mail/SendMailOTPRequestDTO";

export interface IMailService {
  sendMail: (request: any ) => Promise<any>;
}
