import mongoose from "mongoose";
import UserResponseDTO from "../../dtos/response/user/UserResponseDTO";
import { User } from "../../models";
import { userQuery } from "../../queries";
import { IUserService } from "./interface";

const userBAL: IUserService = {
  get: async (id) => {
    const query = { _id: new mongoose.Types.ObjectId(id) };
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
    if (request.avatar) {
      user.avatar = request.avatar;
    }

    const userUpdate = await user.saveAsync();

    const response = new UserResponseDTO().responseDTO(userUpdate);
    return response;
  },
};

export { userBAL };
