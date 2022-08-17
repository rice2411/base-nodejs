import * as express from "express";

import userController from "../../controller/api/user";
import requireLogin from "../../middlerwares/requireLogin";

const router = express.Router({ mergeParams: true });
router.route("/").get(requireLogin.requireLogin, userController.list);
router
  .route("/:userId")
  .get(requireLogin.requireLogin, userController.get)
  .put(requireLogin.requireLogin, userController.update);
router.route("/deactive/:userId")
  .delete(requireLogin.requireLogin, userController.deactive)

export default router;
