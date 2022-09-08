"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateUserRequestDTO {
    get avatarUpload() {
        return this._phoneNumber;
    }
    setAvatarUpload(avatarUpload) {
        this._avatarUpload = avatarUpload;
        return this;
    }
    get phoneNUmber() {
        return this._phoneNumber;
    }
    setPhoneNumber(phoneNUmber) {
        this._phoneNumber = phoneNUmber;
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
    get firstname() {
        return this._firstname;
    }
    setFirstName(firstname) {
        this._firstname = firstname;
        return this;
    }
    get lastname() {
        return this._lastname;
    }
    setLastName(lastname) {
        this._lastname = lastname;
        return this;
    }
    get username() {
        return this._username;
    }
    setUserName(username) {
        this._username = username;
        return this;
    }
    get role() {
        return this._role;
    }
    setRole(role) {
        this._role = role;
        return this;
    }
    get avatar() {
        return this._lastname;
    }
    setAvatar(avatar) {
        this._avatar = avatar;
        return this;
    }
    get is_active() {
        return this._is_active;
    }
    setIs_Active(is_active) {
        this._is_active = is_active;
        return this;
    }
    toUpdateJSON() {
        const request = {
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
    requestDTO(model) {
        if (!model)
            return null;
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
exports.default = UpdateUserRequestDTO;
//# sourceMappingURL=UpdateUserRequestDTO.js.map