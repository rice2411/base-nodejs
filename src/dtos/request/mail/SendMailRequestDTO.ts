import OptionMailTemplateDTO from "./OptionMailTemplateDTO";

export default class SendMailRequestDTO {
  public _email?: string;
  public _options?: OptionMailTemplateDTO;

  constructor({ email, options }) {
    this._email = email;
    this._options = options;
  }

  get email() {
    return this._email;
  }
  get options() {
    return this._options;
  }
}
