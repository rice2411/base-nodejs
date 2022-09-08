import mongoose, { Types } from "mongoose";
export interface IUser extends mongoose.Document {
    _id: Types.ObjectId;
    firstname: string;
    lastname: string;
    username: string;
    role: object;
    password: string;
    refreshToken: string;
    avatar: string;
    is_active: boolean;
    email: string;
    phoneNumber: string;
    saveAsync(): any;
    removeAsync(): any;
}
export interface IUserModel extends mongoose.Model<IUser> {
    aggregatePaginateCustom(aggregates: mongoose.Aggregate<any[]>, arg1: {
        page: number;
        limit: number;
    }): any;
    get(_id: string): Promise<any>;
    list({ skip, limit, is_paginate, search, }?: {
        skip?: number;
        limit?: number;
        is_paginate: boolean;
        search: string;
    }): Promise<any>;
    execAsync(): Promise<any>;
}
declare const model: IUserModel;
export { model as User };
