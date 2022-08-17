import RegisterRequestDTO from "../auth/RegisterRequestDTO";

export interface IUpdateUserRequestDTO {
  firstname?: string;
  lastname?: string;
  username?: string;
  password?: string;
  roles?: Object;
  avatar?: string;
  is_active?: boolean;
}
export default class UpdateUserRequestDTO {
  public _id?: string;
  public _firstname?: string;
  public _lastname?: string;
  public _username?: string;
  public _roles?: Object;
  public _avatar?: string;

  get id() {
    return this._id;
  }

  setId(id: string) {
    this._id = id;
    return this;
  }

  get firstname() {
    return this._firstname;
  }

  setFirstName(firstname: string) {
    this._firstname = firstname;
    return this;
  }

  get lastname() {
    return this._lastname;
  }

  setLastName(lastname: string) {
    this._lastname = lastname;
    return this;
  }

  get username() {
    return this._username;
  }

  setUserName(username: string) {
    this._username = username;
    return this;
  }
  get roles() {
    return this._roles;
  }

  setRoles(roles: Object) {
    this._roles = roles;
    return this;
  }

  get avatar() {
    return this._lastname;
  }

  setAvatar(avatar: string) {
    this._avatar = avatar;
    return this;
  }

  public toUpdateJSON(): IUpdateUserRequestDTO {
    const request: IUpdateUserRequestDTO = {
      firstname: this._firstname,
      lastname: this._lastname,
      username: this._username,
      roles: this._roles,
      avatar: this._avatar,
    };
    return request;
  }

  perpareDTO(model: any) {
    if (!model) return null;
    const dto = new UpdateUserRequestDTO()
      .setUserName(model.username)
      .setFirstName(model.firstname)
      .setLastName(model.lastname)
      .setAvatar(model.avatar)
      .setRoles(model.roles);
    return dto.toUpdateJSON();
  }
}
