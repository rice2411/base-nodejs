class ApiResponse {
  private response_code;
  private message: string;
  private data;

  constructor(responseCode, message = null, data = null) {
    this.response_code = responseCode;
    this.message = message;
    this.data = data;
  }
}

export { ApiResponse };
