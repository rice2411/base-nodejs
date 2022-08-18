import * as express from "express";
import fileUpload from "express-fileupload";
import path from "path";
import { ACCEPTED_FILE } from "../../constants/file";
import fileController from "../../controller/api/file";
import uploadController from "../../controller/api/file";
import authMiddleWare from "../../middlerwares/auth/authMiddleWare";
import fileMiddleWare from "../../middlerwares/file/fileMiddleWare";

const router = express.Router();
router
  .route("/")
  .post(
    fileUpload({ createParentPath: true }),
    fileMiddleWare.filesPayloadExists,
    fileMiddleWare.fileExtLimiter(ACCEPTED_FILE),
    fileMiddleWare.fileSizeLimiter,
    fileController.upload
  );

router.route("/:image").get(fileController.getFile);

export default router;
