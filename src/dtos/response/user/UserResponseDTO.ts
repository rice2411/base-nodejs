import { Types } from "mongoose";
import { IUser } from "../../../models/user";

export interface IUserResponseDTO {
  _id?: Types.ObjectId;
  first_name?: String;
  last_name?: String;
  username?: String;
  password?: String;
  role?: Object;
  avatar?: String;
  is_active?: boolean;
  email?: String;
  email_verified?: boolean;
  phone?: String;
}
export default class UserResponseDTO {
  public _id?: Types.ObjectId;
  public _first_name?: String;
  public _last_name?: String;
  public _username?: String;
  public _role?: Object;
  public _avatar?: String;
  public _email?: String;
  public _phone?: String;
  public _email_verified?: boolean;

  get email_verified() {
    return this._email_verified;
  }

  setEmailVerified(email_verified: boolean) {
    this._email_verified = email_verified;
    return this;
  }
  get phone() {
    return this.phone;
  }

  setPhone(phone: string) {
    this._phone = phone;
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

  setId(id: Types.ObjectId) {
    this._id = id;
    return this;
  }

  get first_name() {
    return this._first_name;
  }

  setFirstName(first_name: String) {
    this._first_name = first_name;
    return this;
  }

  get last_name() {
    return this._last_name;
  }

  setLastName(last_name: String) {
    this._last_name = last_name;
    return this;
  }

  get username() {
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
    return this._avatar;
  }

  setAvatar(_avatar: String) {
    this._avatar = _avatar;
    return this;
  }

  get(): IUserResponseDTO {
    const request: IUserResponseDTO = {
      _id: this._id,
      first_name: this._first_name,
      last_name: this._last_name,
      username: this._username,
      role: this._role,
      avatar: this._avatar,
      email: this._email,
      phone: this._phone,
      email_verified: this._email_verified,
    };

    return request;
  }

  responseDTO(model: IUser) {
    if (!model) return null;
    return this.setId(model._id)
      .setUserName(model.username)
      .setFirstName(model.first_name)
      .setLastName(model.last_name)
      .setAvatar(model.avatar)
      .setRole(model.role)
      .setEmail(model.email)
      .setPhone(model.phone)
      .setEmailVerified(model.email_verified)
      .get();
  }
}
