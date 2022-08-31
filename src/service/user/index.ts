import mongoose from "mongoose";
import QueryOptions from "../../dtos/QueryOptions";
import UpdateUserRequestDTO from "../../dtos/request/user/UpdateUserRequestDTO";
import UserResponseDTO from "../../dtos/response/user/UserResponseDTO";
import { userQuery } from "../../queries";
import userValidation from "../../validation/admin/userValidation";

import { IUserService } from "./interface";
import { userBAL } from "./user";

const userService: IUserService = {
  get: async (id) => {
    const user = await userBAL.get(id);
    const response = new UserResponseDTO().responseDTO(user);
    return response;
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
    // const validErrors = userValidation.updateUserReqest(request);
    // if (validErrors.length) return Promise.reject(new Error(validErrors[0]));
    let result = userBAL.update(request, userId);
    return Promise.resolve(result);
  },
  deactive: async (
    request: UpdateUserRequestDTO,
    userId: mongoose.Types._ObjectId
  ) => {
    let result = userBAL.deactive(request, userId);
    return Promise.resolve(result);
  },
  get_me: async (req) => {
    const user = userBAL.get_me(req);
    return Promise.resolve(user);
  },
};

export { userService };
