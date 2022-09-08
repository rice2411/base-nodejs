import RegisterRequestDTO from "../../request/auth/RegisterRequestDTO";
export interface ICreateUserResponseDTIO {
    username?: String;
    password?: String;
}
export default class CreateUserResponseDTO {
    _username?: String;
    _password?: String;
    get userName(): String;
    setUserName(_username: String): this;
    get password(): String;
    setPassword(_password: String): this;
    get(): ICreateUserResponseDTIO;
    toJSON(model: RegisterRequestDTO): ICreateUserResponseDTIO;
}
