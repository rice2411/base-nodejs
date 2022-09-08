import ExtendableError from "./ExtendableError";
declare class ApiError extends ExtendableError {
    /**
     * Creates an API error.
     * @param {string} responseCode - CustomResponseCode.
     * @param {string} message - Error message.
     * @param {number} status - HTTP status code of error.
     * @param {boolean} isPublic - Whether the message should be visible to user or not.
     */
    constructor(responseCode: any, message: string, status?: number, isPublic?: boolean);
}
export { ApiError };
