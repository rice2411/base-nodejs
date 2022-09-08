"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisterRequestDTO {
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
exports.default = RegisterRequestDTO;
//# sourceMappingURL=RegisterRequestDTO.js.map