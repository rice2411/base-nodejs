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
    _id?: string;
    _firstname?: string;
    _lastname?: string;
    _username?: string;
    _role?: Object;
    _avatar?: string;
    _is_active?: boolean;
    _email?: string;
    _phoneNumber?: string;
    _avatarUpload?: Object;
    get avatarUpload(): string;
    setAvatarUpload(avatarUpload: Object): this;
    get phoneNUmber(): string;
    setPhoneNumber(phoneNUmber: string): this;
    get email(): string;
    setEmail(email: string): this;
    get id(): string;
    setId(id: string): this;
    get firstname(): string;
    setFirstName(firstname: string): this;
    get lastname(): string;
    setLastName(lastname: string): this;
    get username(): string;
    setUserName(username: string): this;
    get role(): Object;
    setRole(role: Object): this;
    get avatar(): string;
    setAvatar(avatar: string): this;
    get is_active(): boolean;
    setIs_Active(is_active: boolean): this;
    toUpdateJSON(): IUpdateUserRequestDTO;
    requestDTO(model: any): IUpdateUserRequestDTO;
}
