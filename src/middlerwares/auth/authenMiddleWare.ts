import env from "../../../config/env";

import { User } from "../../models/user";

import { tokenService } from "../../service/helper/token";
import { userService } from "../../service/user";

const authMiddleWare = {
  requireLogin: async (req, res, next) => {
    if (!req.headers.authorization) {
      return res.errors("Yêu cầu đăng nhập.", 400);
    }
    try {
      const header = req.headers.authorization.split(" ")[0].trim();
      if (header !== "Bearer") return res.errors("Mã token không đúng.");

      const token = req.headers.authorization.split(" ")[1].trim();
      const info = tokenService.verifyToken(token, env.jwtSecret);

      if (!info) return res.errors("Mã token không đúng.");

      const user = await userService.get(info._id);

      next();
    } catch (error) {
      if (error.message == "jwt expired") {
        res.errors("Yêu cầu đăng nhập.", 401);
      }
      next(error);
    }
  },
};

export default authMiddleWare;
