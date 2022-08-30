import env from "../../../config/env";
import { ApiResponse } from "../../helpers/ApiResponse";
import { ResponseCodes } from "../../helpers/ApiResponseCode";
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
      req.user = user;
      next();
    } catch (error) {
      if (error.message == "jwt expired") {
        res.errors("Yêu cầu đăng nhập.", 401);
      }
      next(error);
    }
  },

  checkUserBan: async (req, res, next) => {
    try {
      const user: any = await User.findById(req?.user._id);
      if (!user.is_active) {
        const apiResponse = new ApiResponse(
          ResponseCodes.unauthorized,
          "Unauthorized",
          null
        );
        return res.status(401).json(apiResponse);
      }
      next();
    } catch (error) {}
  },
};

export default authMiddleWare;
