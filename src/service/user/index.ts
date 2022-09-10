import mongoose from "mongoose";
import env from "../../../config/env";
import QueryOptions from "../../dtos/QueryOptions";
import UpdateUserRequestDTO from "../../dtos/request/user/UpdateUserRequestDTO";
import CreateUserResponseDTO from "../../dtos/response/user/CreateUserResponseDTO";
import UserResponseDTO from "../../dtos/response/user/UserResponseDTO";
import { ApiResponse } from "../../helpers";
import { User } from "../../models";
import { userQuery } from "../../queries";
import userValidation from "../../validation/admin/userValidation";
import { AuthErrorMessageService } from "../auth/errorMessage";
import fileService from "../file/file";
import { tokenService } from "../helper/token";

import { IUserService } from "./interface";

const userService: IUserService = {
  get: async (id) => {
    try {
      const query = { _id: new mongoose.Types.ObjectId(id), is_active: true };
      const user = await userQuery.getById(query);
      if (!user) return Promise.reject(new Error("Không tìm thấy"));
      const response = new UserResponseDTO().responseDTO(user);
      return Promise.resolve(new ApiResponse(200, "OK", response));
    } catch (err) {
      return Promise.reject(err);
    }
  },
  list: async (options: QueryOptions) => {
    const query = {
      is_active: true,
    };
    const users = await userQuery.getAllUser(query, options);
    return Promise.resolve(users);
  },
  update: async (
    request: UpdateUserRequestDTO,
    userId: mongoose.Types._ObjectId
  ) => {
    try {
      const user = await User.findOne({
        _id: new mongoose.Types.ObjectId(userId),
      });
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
      return Promise.resolve(new ApiResponse(200, "OK", response));
    } catch (err) {
      return Promise.reject(err);
    }
  },
  deactive: async (listUserId: [mongoose.Types._ObjectId]) => {
    try {
      await Promise.all(
        listUserId.map(async (userId) => {
          const user = await User.findOne({
            _id: new mongoose.Types.ObjectId(userId),
          });
          if (!user)
            return Promise.reject(new Error("Không tìm thấy người dùng."));
          user.is_active = false;
          await user.saveAsync();
        })
      );
      return Promise.resolve(new ApiResponse(200, "Khoá tài khoản thành công"));
    } catch (err) {
      return Promise.reject(err);
    }
  },
  get_me: async (req) => {
    try {
      const token = req.headers.authorization.split(" ")[1].trim();
      const info = tokenService.verifyToken(token, env.jwtSecret);
      const user = await userService.get(info._id);
      return Promise.resolve(new ApiResponse(200, "OK", user));
    } catch (err) {
      return Promise.reject(err);
    }
  },
  removeDataTest: async () => {
    try {
      const result = await User.remove({
        username: { $nin: ["rice", "chou"] },
      });
      return Promise.resolve(new ApiResponse(200, "OK", result));
    } catch (err) {
      return Promise.reject(err);
    }
  },
  importListUser: async (listUser) => {
    try {
      let canImport = true;
      await Promise.all(
        listUser.map(async (user) => {
          const userFound = await User.findOne({ username: user.username });
          if (userFound) {
            canImport = false;
            return Promise.reject(new Error("Tên đăng nhập đã tồn tại"));
          }
        })
      );
      if (canImport) {
        await Promise.all(
          listUser.map(async (user, index) => {
            await userService.create(user, index);
          })
        );
        return Promise.resolve(new ApiResponse(200, "Nhập dữ liệu thành công"));
      }
    } catch (err) {
      return Promise.reject(err);
    }
  },
  create: async (request, userCount) => {
    try {
      const userFound = await User.findOne({
        username: request._username,
      });
      if (userFound) {
        throw new Error(AuthErrorMessageService.USERNAME_IS_EXIST);
      }
      const userCountCurrent = userCount
        ? (await User.countDocuments()) + 1 + userCount
        : (await User.countDocuments()) + 1;
      // Register success
      const newUserDTO = new CreateUserResponseDTO().toJSON(request);
      const newUser = {
        ...newUserDTO,
        firstname: "user" + userCountCurrent,
        lastname: "",
      };
      const user = new User(newUser);
      const userSave = await user.saveAsync();
      const response = new UserResponseDTO().responseDTO(userSave);
      return Promise.resolve(new ApiResponse(200, "OK", response));
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export { userService };
