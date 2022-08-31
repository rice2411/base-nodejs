import { config } from "dotenv";
config();
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME_STAGING,
  NODE_DOCKER_PORT_STAGING,
  ROCKET_CHANNEL_HRM,
  ROCKET_TOKEN,
  ROCKET_DOMAIN,
} = process.env;

export default {
  env: "development",
  envName: "dev",
  jwtSecret: "2b06c243-4e10-427a-ba57-7de64e11deee",
  expiresIn: "5m",
  db: `mongodb+srv://unclerice:023657@cluster0.q7mqbnf.mongodb.net/CompanyDB?retryWrites=true&w=majority`,
  port: NODE_DOCKER_PORT_STAGING,
  firebaseKey: {
    type: "service_account",
    project_id: "base-app",
    private_key_id: "private_key_id",
    private_key: "private_key",
    client_email: "client_email",
    client_id: "client_id",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "client_x509_cert_url",
  },
  databaseUrlFirebase: "databaseUrlFirebase",
};
