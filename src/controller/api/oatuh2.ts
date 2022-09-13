import { BaseSuccesMessage } from "../../messages/success/base";

import passport from "passport";
import oauth2Service from "../../service/oauth2";

const oauth2Controller = {
  success: async (req, res, next) => {
    try {
      const data = req.user;
      console.log(data);
      const response = await oauth2Service.success(data);
      return res.success(BaseSuccesMessage.SUCCESS, response);
    } catch (err) {
      next(err);
    }
  },
  fail: async (req, res, next) => {
    next();
  },
};

export default oauth2Controller;
