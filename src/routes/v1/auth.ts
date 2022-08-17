import * as express from "express";
import authController from "../../controller/api/auth";

const router = express.Router();
router.route("/login").post(authController.login);
router.route("/register").post(authController.register);

export default router;
