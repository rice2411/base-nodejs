export default class ExtendableError extends Error {
    private responseCode;
    private status;
    private isPublic;
    private isOperational;
    constructor(responseCode: any, message: string, status: any, isPublic: boolean);
}
declare class ApplicationError extends Error {
    get name(): string;
}
export declare class UserFacingError extends ApplicationError {
    private statusCode;
    constructor(message: any, statusCode: any);
}
export declare class ValidatorError extends ApplicationError {
    constructor(message: any);
}
export {};
