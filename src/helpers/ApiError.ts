import * as httpStatus from "http-status";

import ExtendableError from "./ExtendableError";

class ApiError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} responseCode - CustomResponseCode.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(
    responseCode,
    message: string,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    isPublic = false
  ) {
    super(responseCode, message, status, isPublic);
  }
}

export { ApiError };
