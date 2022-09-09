
export default class SendMailRequestDTO {
  public _email?: string;

  constructor({  email }) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

}
