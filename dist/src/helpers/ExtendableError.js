"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorError = exports.UserFacingError = void 0;
class ExtendableError extends Error {
    constructor(responseCode, message, status, isPublic) {
        // super(responseCode, message);
        super(message);
        this.name = this.constructor.name;
        this.responseCode = Number.parseInt(responseCode);
        this.message = message;
        this.status = status;
        this.isPublic = isPublic;
        this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
        // Error.captureStackTrace(this, this.constructor.name);
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = ExtendableError;
class ApplicationError extends Error {
    get name() {
        return this.constructor.name;
    }
}
class UserFacingError extends ApplicationError {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.UserFacingError = UserFacingError;
class ValidatorError extends ApplicationError {
    constructor(message) {
        super(message);
        this.message = message;
    }
}
exports.ValidatorError = ValidatorError;
//# sourceMappingURL=ExtendableError.js.map