"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginRequestDTO {
    constructor({ username, password }) {
        this._username = username;
        this._password = password;
    }
    get username() {
        return this._username;
    }
    get password() {
        return this._password;
    }
}
exports.default = LoginRequestDTO;
//# sourceMappingURL=LoginRequestDTO.js.map