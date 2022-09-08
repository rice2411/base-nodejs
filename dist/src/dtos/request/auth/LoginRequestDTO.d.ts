export default class LoginRequestDTO {
    _username: string;
    _password: string;
    constructor({ username, password }: {
        username: any;
        password: any;
    });
    get username(): string;
    get password(): string;
}
