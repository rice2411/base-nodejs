declare class ApiResponse {
    private response_code;
    private message;
    private data;
    constructor(responseCode: any, message?: any, data?: any);
}
export { ApiResponse };
