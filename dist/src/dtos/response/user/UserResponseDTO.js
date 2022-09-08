"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserResponseDTO {
    get phoneNumber() {
        return this._email;
    }
    setPhoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber;
        return this;
    }
    get email() {
        return this._email;
    }
    setEmail(email) {
        this._email = email;
        return this;
    }
    get id() {
        return this._id;
    }
    setId(id) {
        this._id = id;
        return this;
    }
    get firstName() {
        return this._firstname;
    }
    setFirstName(firstName) {
        this._firstname = firstName;
        return this;
    }
    get lastName() {
        return this._lastname;
    }
    setLastName(_lastname) {
        this._lastname = _lastname;
        return this;
    }
    get userName() {
        return this._username;
    }
    setUserName(_username) {
        this._username = _username;
        return this;
    }
    get role() {
        return this._role;
    }
    setRole(_role) {
        this._role = _role;
        return this;
    }
    get avatar() {
        return this._lastname;
    }
    setAvatar(_avatar) {
        this._avatar = _avatar;
        return this;
    }
    get() {
        const request = {
            _id: this._id,
            firstname: this._firstname,
            lastname: this._lastname,
            username: this._username,
            role: this._role,
            avatar: this._avatar,
            email: this._email,
            phoneNumber: this._phoneNumber,
        };
        return request;
    }
    responseDTO(model) {
        if (!model)
            return null;
        return this.setId(model._id)
            .setUserName(model.username)
            .setFirstName(model.firstname)
            .setLastName(model.lastname)
            .setAvatar(model.avatar)
            .setRole(model.role)
            .setEmail(model.email)
            .setPhoneNumber(model.phoneNumber)
            .get();
    }
}
exports.default = UserResponseDTO;
//# sourceMappingURL=UserResponseDTO.js.map