export default class OTPRequestDTO {
  public _otp: string;

  constructor({ otp }) {
    this._otp = otp;
  }

  get otp() {
    return this._otp;
  }
}
