"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bluebird_1 = __importDefault(require("bluebird"));
const env_1 = __importDefault(require("../env"));
const DB_URL = env_1.default.db;
bluebird_1.default.promisifyAll(mongoose_1.default);
mongoose_1.default
    .connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then(() => {
    const dbStatus = `*    DB Connection: OK\n****************************\n`;
    console.log("****************************");
    console.log("*    Starting Server");
    console.log(`*    DB_URL: ${DB_URL}`);
    console.log(`*    Port: ${env_1.default.port || 2411}`);
    console.log(`*    NODE_ENV: ${env_1.default.env}`);
    console.log(`*    Database: MongoDB`);
    console.log(dbStatus);
})
    .catch((err) => {
    const dbStatus = `*    Error connecting to DB: ${err}\n****************************\n`;
    console.log(dbStatus);
});
//# sourceMappingURL=mongodb.js.map