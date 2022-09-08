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
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const v1_1 = __importDefault(require("../src/routes/v1"));
const injector_1 = __importDefault(require("../src/helpers/injector"));
const cors_2 = require("./cors");
const SUCCESS_CODE = 200;
const app = (0, express_1.default)();
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: false,
}));
app.use(bodyParser.json({ limit: "5mb" }));
app.use((0, cors_1.default)(cors_2.corsOptions));
app.disable("x-powered-by");
// ROUTES FOR OUR API
// routes =========================
console.log("[AuthApi] Config API Routes");
// =============================================================================
app.use(function (req, res, next) {
    req.headers["if-none-match"] = "no-match-for-this";
    next();
});
app.use(injector_1.default);
app.use("/api/v1", v1_1.default);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const _send = res.send;
    let sent = false;
    res.send = (data) => {
        if (sent) {
            return;
        }
        _send.bind(res)(data);
        sent = true;
    };
    next();
});
app.get("/_ah/health", (req, res) => {
    res.status(SUCCESS_CODE).json("ok");
});
exports.default = app;
//# sourceMappingURL=app.js.map