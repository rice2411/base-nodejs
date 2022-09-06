import mongoose from "mongoose";
import { userService } from ".";
import env from "../../../config/env";

import UserResponseDTO from "../../dtos/response/user/UserResponseDTO";
import { User } from "../../models";
import { userQuery } from "../../queries";
import fileService from "../file/file";
import { tokenService } from "../helper/token";
import { IUserService } from "./interface";

const userBAL: IUserService = {
  get: async (id) => {
    const query = { _id: new mongoose.Types.ObjectId(id), is_active: true };
    const user = await userQuery.getById(query);
    if (!user) throw new Error("Không tìm thấy.");
    return user;
  },
  list: async () => {},
  update: async (request, userId) => {
    const user = await User.findOne({ _id: userId });
    if (!user) return Promise.reject(new Error("Không tìm thấy người dùng."));

    if (request.firstname) {
      user.firstname = request.firstname;
    }
    if (request.lastname) {
      user.lastname = request.lastname;
    }
    if (request.avatarUpload) {
      const file = request.avatarUpload;
      const response = await fileService.upload(file);
      if (response) {
        user.avatar = response.name;
      }
    }
    if (request.email) {
      const emailFound = await User.findOne({
        email: request.email,
      });

      if (emailFound && user.email != request.email) {
        return Promise.reject(Error("Email này đã có người sử dụng!"));
      }
      user.email = request.email;
    }
    if (request.phoneNumber) {
      user.phoneNumber = request.phoneNumber;
    }

    const userUpdate = await user.saveAsync();

    const response = new UserResponseDTO().responseDTO(userUpdate);
    return response;
  },
  deactive: async (listUserId) => {
    const result = await Promise.all(
      listUserId.map(async (userId) => {
        const user = await User.findOne({ _id: userId });
        if (!user)
          return Promise.reject(new Error("Không tìm thấy người dùng."));
        user.is_active = false;
        await user.saveAsync();
      })
    );
    return "Khoá tài khoản thành công";
  },
  get_me: async (req) => {
    try {
      const token = req.headers.authorization.split(" ")[1].trim();
      const info = tokenService.verifyToken(token, env.jwtSecret);
      const user = await userService.get(info._id);
      return user;
    } catch (err) {
      console.log(err);
    }
  },
  removeDataTest: async () => {
    try {
      const result = await User.remove({
        username: { $nin: ["rice", "chou"] },
      });
      return result;
    } catch (err) {
      console.log(err);
    }
  },
};

export { userBAL };
