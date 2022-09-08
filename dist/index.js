"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpStatus = __importStar(require("http-status"));
const cors_1 = __importDefault(require("cors"));
const app_1 = __importDefault(require("./config/app"));
const env_1 = __importDefault(require("./config/env"));
const Debug = require("debug");
const debug = Debug("api:index");
const errorHandler = (err, req, res, next) => {
    res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
    res.json({
        response_code: err.responseCode,
        message: err.message,
        success: false,
    });
    next();
};
const notFoundHandler = (req, res, next) => {
    const errorMessage = `Invalid api call path: ${req.path}`;
    const err = new Error(errorMessage);
    err.response_code = 3;
    err.status = httpStatus.NOT_FOUND;
    next(err);
};
app_1.default.use((0, cors_1.default)());
// listen on port config.port
app_1.default.listen(env_1.default.port, () => {
    debug(`server started on port ${env_1.default.port} (${env_1.default.env})`);
});
app_1.default.use(notFoundHandler);
app_1.default.use(errorHandler);
require("./config/connection/mongodb");
module.exports = app_1.default;
exports.default = app_1.default;
//# sourceMappingURL=index.js.map