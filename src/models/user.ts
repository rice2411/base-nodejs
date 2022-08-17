import mongoose from "mongoose";

const paginate = require("./plugins/paginate");
const aggregatePaginate = require("./plugins/aggregatePaginate");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
  },
  lastname: { type: String, trim: true },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Editor: Number,
    Admin: Number,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: String,
  avatar: String,
  is_active: {
    type: Boolean,
    default: true,
  },
});

export interface IUser extends mongoose.Document {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  roles: object;
  password: string;
  refreshToken: string;
  avatar: string;
  is_active: boolean;
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

UserSchema.index({ username: "text", firstname: "text" });

const model = mongoose.model<IUser, IUserModel>("User", UserSchema);
export { model as User };
