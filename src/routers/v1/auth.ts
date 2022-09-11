import * as express from "express";
import authController from "../../controller/api/auth";

const router = express.Router();

router.route("/login").post(authController.login);
router.route("/register").post(authController.register);
router.route("/verify").get(authController.verifyToken);
router
  .route("/verify-otp")
  .get(authController.sendMailOTP)
  .post(authController.verifyOTP);
router.route("/reset-password").post(authController.resetPassword);

export default router;
