import SendMailRequestDTO from "./SendMailRequestDTO";

export default class SendMailOTPRequestDTO extends SendMailRequestDTO {
    public _otp?: string;
  
    constructor({ email,otp }) {
      super({email})
      this._otp = otp
    }
  
    get otp() {
      return this._otp
    }
}
  