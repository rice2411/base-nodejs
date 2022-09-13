import * as express from "express";
const passport = require("passport");
import oauth2Controller from "../../controller/api/oatuh2";

const router = express.Router();
const scope = {
  scope: ["email", "profile"],
};
const objectCallback = {
  successRedirect: "/test",
  failureRedirect: "/fail",
};
router.route("/google").get(passport.authenticate("google", scope));
router
  .route("/google/callback")
  .get(passport.authenticate("google", objectCallback));

router.route("/facebook").get(passport.authenticate("facebook", scope));
router
  .route("/facebook/callback")
  .get(passport.authenticate("facebook", objectCallback));

router.route("/github").get(passport.authenticate("github", scope));
router
  .route("/github/callback")
  .get(passport.authenticate("github", objectCallback));

export default router;
