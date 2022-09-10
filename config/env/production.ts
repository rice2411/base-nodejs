import { config } from "dotenv";
config();
const { NODE_DOCKER_PORT_STAGING } = process.env;

export default {
  env: "production",
  envName: "dev",
  jwtSecret: "2b06c243-4e10-427a-ba57-7de64e11deee",
  expiresIn: "1d",
  db: `mongodb+srv://unclerice:023657@cluster0.q7mqbnf.mongodb.net/CompanyDB?retryWrites=true&w=majority`,
  port: NODE_DOCKER_PORT_STAGING,
  mail: {
    service: "gmail",
    root: "pentappingminh@gmail.com",
    key: "bcwx bzoi cmil mnjd",
    secret: "8e244dcc-8b42-4ae9-8d2b-cec49aa1ec5c",
    expiresIn: "3m",
  },
};
