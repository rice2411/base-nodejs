"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("../constants/user");
const paginate = require("./plugins/paginate");
const aggregatePaginate = require("./plugins/aggregatePaginate");
const Schema = mongoose_1.default.Schema;
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
        default: user_1.AVATAR_DEFAULT,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    email: {
        type: String,
        trim: true,
    },
    phoneNumber: String,
});
UserSchema.plugin(paginate);
UserSchema.plugin(aggregatePaginate);
UserSchema.index({
    username: "text",
    firstname: "text",
    lastname: "text",
    email: "text",
});
const model = mongoose_1.default.model("User", UserSchema);
exports.User = model;
//# sourceMappingURL=user.js.map