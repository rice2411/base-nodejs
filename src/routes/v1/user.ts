import * as express from "express";

import userController from "../../controller/api/user";
import authMiddleWare from "../../middlerwares/auth/authMiddleWare";

const router = express.Router({ mergeParams: true });
router.route("/").get(authMiddleWare.requireLogin, userController.list);
router
  .route("/:userId")
  .get(authMiddleWare.requireLogin, userController.get)
  .put(authMiddleWare.requireLogin, userController.update);
router
  .route("/deactive/:userId")
  .delete(authMiddleWare.requireLogin, userController.deactive);

export default router;
