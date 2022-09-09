export default class OptionMailTemplateDTO {
  public _subject?: string;
  public _html?: string;

  constructor({ subject, html }) {
    this._subject = subject;
    this._html = html;
  }

  get subject() {
    return this._subject;
  }
  get html() {
    return this._html;
  }
}
