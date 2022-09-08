"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiBaseResponse = void 0;
class ApiBaseResponse {
    constructor(data = null, success = true, message = "OK") {
        this.success = success;
        this.message = message;
        this.data = data;
    }
}
exports.ApiBaseResponse = ApiBaseResponse;
//# sourceMappingURL=ApiBaseResponse.js.map