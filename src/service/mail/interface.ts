import SendMailRequestDTO from "../../dtos/request/mail/SendMailRequestDTO";

export interface IMailService {
  sendMail: (request: SendMailRequestDTO) => Promise<any>;
}
