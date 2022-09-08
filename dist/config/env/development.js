"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME_STAGING, NODE_DOCKER_PORT_STAGING, ROCKET_CHANNEL_HRM, ROCKET_TOKEN, ROCKET_DOMAIN, } = process.env;
exports.default = {
    env: "development",
    envName: "dev",
    jwtSecret: "2b06c243-4e10-427a-ba57-7de64e11deee",
    expiresIn: "1d",
    db: `mongodb+srv://unclerice:023657@cluster0.q7mqbnf.mongodb.net/CompanyDB?retryWrites=true&w=majority`,
    port: NODE_DOCKER_PORT_STAGING,
    mail: {
        service: "gmail",
        root: "pentappingminh@gmail.com",
        key: "bcwx bzoi cmil mnjd",
    },
};
//# sourceMappingURL=development.js.map