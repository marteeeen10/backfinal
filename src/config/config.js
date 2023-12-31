import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  adminName: process.env.ADMIN_NAME,
  adminPasword: process.env.ADMIN_PASSWORD,
  mailer: {
    USER: process.env.APP_EMAIL,
    PASSWORD: process.env.APP_PASSWORD,
  },
};