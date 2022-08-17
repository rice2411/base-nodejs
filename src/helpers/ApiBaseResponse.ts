class ApiBaseResponse {
  private success: boolean;
  private message: string;
  private data: any;

  constructor(data = null, success = true, message = "OK") {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}

export { ApiBaseResponse };
