const responseCodes = {
  success: 0,
  invalidUserNameOrPassword: 1,
  invalidRequest: 2,
  notFound: 3,
  serverError: 4,
  userNotFound: 5,
  unauthorized: 6,
  emailAlreadyExists: 7,
  phoneAlreadyExists: 8,
  tokenIsExpired: 9,
  itemRequired: 400,
};

export { responseCodes as ResponseCodes };
