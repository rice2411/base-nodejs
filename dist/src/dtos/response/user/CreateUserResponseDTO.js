"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUserResponseDTO {
    get userName() {
        return this._username;
    }
    setUserName(_username) {
        this._username = _username;
        return this;
    }
    get password() {
        return this._username;
    }
    setPassword(_password) {
        this._password = _password;
        return this;
    }
    get() {
        const request = {
            username: this._username,
            password: this._password,
        };
        return request;
    }
    toJSON(model) {
        if (!model)
            return null;
        return this.setUserName(model.username).setPassword(model.password).get();
    }
}
exports.default = CreateUserResponseDTO;
//# sourceMappingURL=CreateUserResponseDTO.js.map