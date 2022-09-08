"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayRemoveItems = exports.arrayRemoveDuplicates = exports.instanceofObjectId = exports.isObjectId = exports.ObjectId = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ObjectId = (id) => {
    if (!id)
        return new mongoose_1.default.Types.ObjectId();
    return new mongoose_1.default.Types.ObjectId(id);
};
exports.ObjectId = ObjectId;
const isObjectId = (id) => {
    return mongoose_1.default.Types.ObjectId.isValid(id);
};
exports.isObjectId = isObjectId;
const instanceofObjectId = (id) => {
    return id instanceof mongoose_1.default.Types.ObjectId;
};
exports.instanceofObjectId = instanceofObjectId;
const arrayRemoveDuplicates = (arr) => {
    let s = new Set(arr);
    return [...s];
};
exports.arrayRemoveDuplicates = arrayRemoveDuplicates;
const arrayRemoveItems = (arr, itemRemove) => {
    return arr.filter((item) => item !== itemRemove);
};
exports.arrayRemoveItems = arrayRemoveItems;
//# sourceMappingURL=string.js.map