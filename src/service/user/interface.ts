import QueryOptions from "../../dtos/QueryOptions";
import mongoose from "mongoose";
import { IUpdateUserRequestDTO } from "../../dtos/request/user/UpdateUserRequestDTO";

export interface IUserService {
  get: (userId: mongoose.Types._ObjectId) => Promise<any>;
  list: (options: QueryOptions) => Promise<any>;
  update: (
    request: IUpdateUserRequestDTO,
    userId: mongoose.Types._ObjectId
  ) => Promise<any>;
  deactive: (
    request: IUpdateUserRequestDTO,
    userId: mongoose.Types._ObjectId
  ) => Promise<any>;
  get_me: (req: any) => Promise<any>;
}
