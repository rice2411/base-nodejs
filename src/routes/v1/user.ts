import * as express from "express";
import fileUpload from "express-fileupload";
import userController from "../../controller/api/user";
import authMiddleWare from "../../middlerwares/auth/authMiddleWare";

const router = express.Router({ mergeParams: true });
router.route("/").get(authMiddleWare.requireLogin, userController.list);
router.route("/get-me").get(authMiddleWare.requireLogin, userController.get_me);
router
  .route("/remove-test-data")
  .delete(authMiddleWare.requireLogin, userController.removeDataTest);
router
  .route("/deactive")
  .delete(authMiddleWare.requireLogin, userController.deactive);
router
  .route("/:userId")
  .get(authMiddleWare.requireLogin, userController.get)
  .put(
    fileUpload({ createParentPath: true }),
    authMiddleWare.requireLogin,
    userController.update
  );

export default router;
