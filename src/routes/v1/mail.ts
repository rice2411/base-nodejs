import * as express from "express";

import fileController from "../../controller/api/file";
import mailController from "../../controller/api/mail";
import authMiddleWare from "../../middlewares/auth/authenMiddleWare";

const router = express.Router();
router.route("/").post(authMiddleWare.requireLogin, mailController.sendmail);

export default router;
