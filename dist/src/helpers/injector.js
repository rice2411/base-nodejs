"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const injector = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.success = (message = 'OK', data = null, statusCode = 200) => {
        let responseObj = {
            success: true,
            message: message || 'OK'
        };
        if (data !== null && data.data && data.paginate) {
            responseObj = Object.assign(Object.assign({}, responseObj), { data: data.data, paginate: data.paginate });
        }
        else {
            responseObj = Object.assign(Object.assign({}, responseObj), { data: data });
        }
        if (statusCode < 200 || statusCode > 299)
            statusCode = 200;
        return res.status(statusCode).json(responseObj);
    };
    res.errors = (message = 'Yêu cầu thất bại.', statusCode = 400, errorType = 'undefined') => {
        let responseObj = {
            success: false,
            errorCode: errorType,
            message: message || 'Yêu cầu thất bại.'
        };
        if (statusCode >= 200 && statusCode <= 299)
            statusCode = 400;
        return res.status(statusCode).json(responseObj);
    };
    res.paginate = (data = null, message = 'OK', statusCode = 200) => {
        let responseOb = {
            success: true,
            message: message || 'OK',
        };
        if (data) {
            if (data.docs) {
                responseOb = Object.assign(Object.assign({}, responseOb), { data: data.docs });
            }
            else
                responseOb = Object.assign(Object.assign({}, responseOb), { data: data });
            if (data.totalDocs) {
                // Pagination model
                delete data.docs;
                responseOb = Object.assign(Object.assign({}, responseOb), { pagination: data });
            }
        }
        if (statusCode < 200 || statusCode > 299)
            statusCode = 200;
        return res.status(statusCode).json(responseOb);
    };
    next();
});
exports.default = injector;
//# sourceMappingURL=injector.js.map