import RegisterRequestDTO from "../auth/RegisterRequestDTO";

export interface IUpdateUserRequestDTO {
  firstname?: string;
  lastname?: string;
  username?: string;
  password?: string;
  role?: Object;
  avatar?: string;
  is_active?: boolean;
  email?: string;
  phoneNumber?: string;
  avatarUpload?: Object;
}
export default class UpdateUserRequestDTO {
  public _id?: string;
  public _firstname?: string;
  public _lastname?: string;
  public _username?: string;
  public _role?: Object;
  public _avatar?: string;
  public _is_active?: boolean;
  public _email?: string;
  public _phoneNumber?: string;
  public _avatarUpload?: Object;

  get avatarUpload() {
    return this._phoneNumber;
  }

  setAvatarUpload(avatarUpload: Object) {
    this._avatarUpload = avatarUpload;
    return this;
  }

  get phoneNumber() {
    return this._phoneNumber;
  }

  setPhoneNumber(phoneNUmber: string) {
    this._phoneNumber = phoneNUmber;
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
  get role() {
    return this._role;
  }

  setRole(role: Object) {
    this._role = role;
    return this;
  }

  get avatar() {
    return this._lastname;
  }

  setAvatar(avatar: string) {
    this._avatar = avatar;
    return this;
  }

  get is_active() {
    return this._is_active;
  }

  setIs_Active(is_active: boolean) {
    this._is_active = is_active;
    return this;
  }

  public toUpdateJSON(): IUpdateUserRequestDTO {
    const request: IUpdateUserRequestDTO = {
      firstname: this._firstname,
      lastname: this._lastname,
      username: this._username,
      role: this._role,
      avatar: this._avatar,
      is_active: this.is_active,
      email: this._email,
      phoneNumber: this._phoneNumber,
      avatarUpload: this._avatarUpload,
    };
    return request;
  }

  requestDTO(model: any) {
    if (!model) return null;
    const dto = new UpdateUserRequestDTO()
      .setUserName(model.username)
      .setFirstName(model.firstname)
      .setLastName(model.lastname)
      .setAvatar(model.avatar)
      .setRole(model.role)
      .setIs_Active(model.is_active)
      .setEmail(model.email)
      .setAvatarUpload(model.avatarUpload)
      .setPhoneNumber(model.phoneNumber);
    return dto.toUpdateJSON();
  }
}
