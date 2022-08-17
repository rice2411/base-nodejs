export default class ExtendableError extends Error {
  private responseCode;
  private status;
  private isPublic: boolean;
  private isOperational: boolean;

  constructor(responseCode, message: string, status, isPublic: boolean) {
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

class ApplicationError extends Error {
  get name() {
    return this.constructor.name;
  }
}

export class UserFacingError extends ApplicationError {
  private statusCode: string;
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}

export class ValidatorError extends ApplicationError {
  constructor(message) {
    super(message);
    this.message = message;
  }
}
