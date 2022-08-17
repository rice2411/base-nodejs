import PasswordHash from "../../../helpers/PasswordHash";

export default class RegisterRequestDTO {
  public _username: string;
  public _password: string;

  constructor({ username, password }) {
    this._username = username;
    this._password = PasswordHash.generate(password);
  }

  get username() {
    return this._username;
  }
  get password() {
    return this._password;
  }
}
