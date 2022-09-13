import * as express from "express";
const passport = require("passport");
import oauth2Controller from "../../controller/api/oatuh2";

const router = express.Router();

const objectCallback = {
  successRedirect: "/test",
  failureRedirect: "/fail",
};
router.route("/google").get(
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);
router
  .route("/google/callback")
  .get(passport.authenticate("google", objectCallback));

router.route("/facebook").get(passport.authenticate("facebook"));
router
  .route("/facebook/callback")
  .get(passport.authenticate("facebook", objectCallback));

router.route("/github").get(
  passport.authenticate("github", {
    scope: ["email", "profile"],
  })
);
router
  .route("/github/callback")
  .get(passport.authenticate("github", objectCallback));

export default router;
