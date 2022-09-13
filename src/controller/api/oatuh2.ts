import { BaseSuccesMessage } from "../../messages/success/base";

import passport from "passport";

const oauth2Controller = {
  success: async (req, res, next) => {
    console.log(typeof req.user);
    next();
  },
  fail: async (req, res, next) => {
    next();
  },
};

export default oauth2Controller;
