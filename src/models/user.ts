import mongoose, { Types } from "mongoose";
import { AVATAR_DEFAULT } from "../constants/user";

const paginate = require("./plugins/paginate");
const aggregatePaginate = require("./plugins/aggregatePaginate");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
  },
  last_name: { type: String, trim: true },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: Number,
    default: 2001,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: AVATAR_DEFAULT,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  email: {
    type: String,
    trim: true,
  },
  phone: String,
});

export interface IUser extends mongoose.Document {
  _id: Types.ObjectId;
  first_name: string;
  last_name: string;
  username: string;
  role: object;
  password: string;
  avatar: string;
  is_active: boolean;
  email: string;
  phone: string;
  saveAsync(): any;
  removeAsync(): any;
}

export interface IUserModel extends mongoose.Model<IUser> {
  aggregatePaginateCustom(
    aggregates: mongoose.Aggregate<any[]>,
    arg1: { page: number; limit: number }
  ): any;
  get(_id: string): Promise<any>;
  list({
    skip,
    limit,
    is_paginate,
    search,
  }?: {
    skip?: number;
    limit?: number;
    is_paginate: boolean;
    search: string;
  }): Promise<any>;
  execAsync(): Promise<any>;
}

UserSchema.plugin(paginate);
UserSchema.plugin(aggregatePaginate);

UserSchema.index({
  user_name: "text",
  first_name: "text",
  last_name: "text",
  email: "text",
});

const model = mongoose.model<IUser, IUserModel>("User", UserSchema);
export { model as User };
