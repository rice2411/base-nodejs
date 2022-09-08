import PasswordHash from "../../../helpers/PasswordHash";

export default class SendMailRequestDTO {
  public _email?: string;
  public _otp?: string;

  constructor({  email, otp }) {
    this._email = email;
    this._otp = otp
  }

  get email() {
    return this._email;
  }

  get otp() {
    return this._otp
  }

}
