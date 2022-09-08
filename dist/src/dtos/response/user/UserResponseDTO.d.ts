import { Types } from "mongoose";
import { IUser } from "../../../models/user";
export interface IUserResponseDTO {
    _id?: Types.ObjectId;
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
    _id?: Types.ObjectId;
    _firstname?: String;
    _lastname?: String;
    _username?: String;
    _role?: Object;
    _avatar?: String;
    _email?: String;
    _phoneNumber?: String;
    get phoneNumber(): String;
    setPhoneNumber(phoneNumber: string): this;
    get email(): String;
    setEmail(email: string): this;
    get id(): Types.ObjectId;
    setId(id: Types.ObjectId): this;
    get firstName(): String;
    setFirstName(firstName: String): this;
    get lastName(): String;
    setLastName(_lastname: String): this;
    get userName(): String;
    setUserName(_username: String): this;
    get role(): Object;
    setRole(_role: Object): this;
    get avatar(): String;
    setAvatar(_avatar: String): this;
    get(): IUserResponseDTO;
    responseDTO(model: IUser): IUserResponseDTO;
}
