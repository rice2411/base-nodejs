import { config } from "dotenv";
config();
const { NODE_RICE_APP_PORT } = process.env;

export default {
  env: "development",
  envName: "dev",
  jwtSecret: "2b06c243-4e10-427a-ba57-7de64e11deee",
  expiresIn: "1y",
  db: `mongodb+srv://unclerice:023657@cluster0.q7mqbnf.mongodb.net/CompanyDB?retryWrites=true&w=majority`,
  port: NODE_RICE_APP_PORT,
  mail: {
    service: "gmail",
    root: "minhrice.dev@gmail.com",
    key: "ausl qjfp zukd wqkj",
    secret: "8e244dcc-8b42-4ae9-8d2b-cec49aa1ec5c",
    expiresIn: "3m",
  },
  otp: {
    secret: "16c2ae54-4f41-4641-b922-bdf979fe063c",
    expiresIn: "3m",
  },
  sms: {
    sid: "AC01078c94d9b3781bdf184750450fcbd6",
    auth_token: "4ab7deffc7428b3c6cb6ea4de7119787",
  },
  google: {
    url: "https://accounts.google.com/o/oauth2/v2/auth",
    client_id:
      "409604480079-jbtu4kj3jegskujbkiebvr0h3s9s7jg4.apps.googleusercontent.com",
    client_secret: "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",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    callback_uri: "api/v1/oauth2/google/callback",
  },
  facebook: {
    app_id: "2501965933288142",
    app_secret: "c3588b2f23f7bd3ed868a55b3b3a50ea",
    callback_uri: "api/v1/oauth2/facebook/callback",
  },
  github: {
    client_id: "716df12f71fc67a458e8",
    client_secret: "378a7919af48f982fad7a57630fbd34e1a91ea55",
    callback_uri: "api/v1/oauth2/github/callback",
  },
};
