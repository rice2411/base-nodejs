import env from "../../../config/env";
import { ROLE } from "../../constants/role";
import { ApiResponse } from "../../helpers/ApiResponse";
import { ResponseCodes } from "../../helpers/ApiResponseCode";
import { User } from "../../models/user";

import { tokenService } from "../../service/helper/token";
import { userService } from "../../service/user";

const authorMiddleWare = {
  checkUserRole: (role = 0) => {
    return async (req, res, next) => {
      try {
        const user = await userService.get_me(req);
        if (user) {
          if (role == user.role || user.role == ROLE.ROOT) {
            next();
          } else {
            const error = new Error("Người dùng không có quyền truy cập.");
            next(error);
          }
        }
      } catch (error) {
        if (error.message == "jwt expired") {
          res.errors("Yêu cầu đăng nhập.", 401);
        }
        next(error);
      }
    };
  },
};

export default authorMiddleWare;
