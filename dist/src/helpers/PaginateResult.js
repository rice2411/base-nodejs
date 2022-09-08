"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPaginateResult = void 0;
class ApiPaginateResult {
    constructor(dto) {
        var _a, _b;
        this.toRESPONSE = () => ({
            data: this.docs,
            paginate: {
                page: this.page,
                limit: this.limit,
                totalDocs: this.totalDocs,
                totalPages: this.totalPages,
            }
        });
        this.docs = dto.docs;
        this.page = (_a = dto.page) !== null && _a !== void 0 ? _a : 1;
        this.limit = (_b = dto.limit) !== null && _b !== void 0 ? _b : 20;
        this.totalDocs = dto.totalDocs;
        this.totalPages = dto.totalPages;
    }
}
exports.ApiPaginateResult = ApiPaginateResult;
//# sourceMappingURL=PaginateResult.js.map