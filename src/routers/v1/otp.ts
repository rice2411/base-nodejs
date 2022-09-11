import * as express from "express";

import otpController from "../../controller/api/otp";

const router = express.Router();

router.route("/send-mail").get(otpController.sendMail);
router.route("/verify").post(otpController.verify);

export default router;
