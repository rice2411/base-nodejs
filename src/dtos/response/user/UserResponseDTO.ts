import { IUser } from "../../../models/user";

export interface IUserResponseDTO {
  _id?: String;
  firstname?: String;
  lastname?: String;
  username?: String;
  password?: String;
  role?: Object;
  avatar?: String;
  is_active?: boolean;
  email: String;
  phoneNumber: String;
}
export default class UserResponseDTO {
  public _id?: String;
  public _firstname?: String;
  public _lastname?: String;
  public _username?: String;
  public _role?: Object;
  public _avatar?: String;
  public _email?: String;
  public _phoneNumber?: String;

  get phoneNumber() {
    return this._email;
  }

  setPhoneNumber(phoneNumber: string) {
    this._phoneNumber = phoneNumber;
    return this;
  }
  get email() {
    return this._email;
  }

  setEmail(email: string) {
    this._email = email;
    return this;
  }

  get id() {
    return this._id;
  }

  setId(id: String) {
    this._id = id;
    return this;
  }

  get firstName() {
    return this._firstname;
  }

  setFirstName(firstName: String) {
    this._firstname = firstName;
    return this;
  }

  get lastName() {
    return this._lastname;
  }

  setLastName(_lastname: String) {
    this._lastname = _lastname;
    return this;
  }

  get userName() {
    return this._username;
  }

  setUserName(_username: String) {
    this._username = _username;
    return this;
  }
  get role() {
    return this._role;
  }

  setRole(_role: Object) {
    this._role = _role;
    return this;
  }

  get avatar() {
    return this._lastname;
  }

  setAvatar(_avatar: String) {
    this._avatar = _avatar;
    return this;
  }

  get(): IUserResponseDTO {
    const request: IUserResponseDTO = {
      _id: this._id,
      firstname: this._firstname,
      lastname: this._lastname,
      username: this._username,
      role: this._role,
      avatar: this._avatar,
      email: this._email,
      phoneNumber: this._phoneNumber,
    };

    return request;
  }

  responseDTO(model: IUser) {
    if (!model) return null;
    return this.setId(model._id)
      .setUserName(model.username)
      .setFirstName(model.firstname)
      .setLastName(model.lastname)
      .setAvatar(model.avatar)
      .setRole(model.role)
      .setEmail(model.email)
      .setPhoneNumber(model.phoneNumber)
      .get();
  }
}
