export interface IMailService {
  sendMail: (request: SendMailRequestDTO) => Promise<any>;
}
