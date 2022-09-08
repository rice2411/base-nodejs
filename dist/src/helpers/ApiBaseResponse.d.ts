declare class ApiBaseResponse {
    private success;
    private message;
    private data;
    constructor(data?: any, success?: boolean, message?: string);
}
export { ApiBaseResponse };
