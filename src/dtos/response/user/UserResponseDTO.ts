import { IUser } from "../../../models/user";

export interface IUserResponseDTO {
  _id?: String;
  firstname?: String;
  lastname?: String;
  username?: String;
  password?: String;
  roles?: Object;
  avatar?: String;
  is_active?: boolean;
}
export default class UserResponseDTO {
  public _id?: String;
  public _firstname?: String;
  public _lastname?: String;
  public _username?: String;
  public _roles?: Object;
  public _avatar?: String;

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
  get roles() {
    return this._roles;
  }

  setRoles(_roles: Object) {
    this._roles = _roles;
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
      roles: this._roles,
      avatar: this._avatar,
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
      .setRoles(model.roles)
      .get();
  }

  toJSON(model: any) {
    if (!model) return null;
    return this.setId(model._id)
      .setUserName(model.username)
      .setFirstName(model.firstname)
      .setLastName(model.lastname)
      .setAvatar(model.avatar)
      .setRoles(model.roles)
      .get();
  }

  responseSimpleDTO(model: IUser) {
    if (!model) return null;
    return this.setId(model._id)
      .setUserName(model.username)
      .setFirstName(model.firstname)
      .setLastName(model.lastname)
      .setAvatar(model.avatar)
      .setRoles(model.roles)
      .get();
  }

  toArrayResponseDTO(models: IUser[]) {
    if (!models.length) return [];
    return models.map((model) => new UserResponseDTO().responseDTO(model));
  }
}
