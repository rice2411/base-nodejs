import { config } from "dotenv";
config();
const { NODE_RICE_APP_PORT } = process.env;

export default {
  env: "production",
  envName: "dev",
  jwtSecret: "2b06c243-4e10-427a-ba57-7de64e11deee",
  expiresIn: "1d",
  db: `mongodb+srv://unclerice:023657@cluster0.q7mqbnf.mongodb.net/CompanyDB?retryWrites=true&w=majority`,
  port: NODE_RICE_APP_PORT,
  mail: {
    service: "gmail",
    root: "pentappingminh@gmail.com",
    key: "bcwx bzoi cmil mnjd",
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
};
