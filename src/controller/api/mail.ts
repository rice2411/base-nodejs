import SendMailRequestDTO from "../../dtos/request/mail/SendMailRequestDTO";
import mailService from "../../service/mail";

const mailController = {
  sendmail: async (req, res, next) => {
    try {
      const request = new SendMailRequestDTO(req.body);
      const result = await mailService.sendMail(request);
      return res.success("OK", result);
    } catch (err) {
      next(err);
    }
  },
};

export default mailController;
