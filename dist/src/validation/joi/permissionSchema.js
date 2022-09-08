"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePermision = exports.createPermision = void 0;
const Joi = __importStar(require("joi"));
const ExtendableError_1 = require("../../helpers/ExtendableError");
const createPermision = Joi.object({
    name: Joi.string()
        .min(5)
        .required()
        .error(new ExtendableError_1.ValidatorError("Tên permision có ít nhất 5 kí tự")),
    name_query: Joi.string()
        .min(5)
        .required()
        .error(new ExtendableError_1.ValidatorError("name_query permision có ít nhất 5 kí tự")),
    description: Joi.string()
        .min(5)
        .required()
        .error(new ExtendableError_1.ValidatorError("Mô tả permision có ít nhất 5 kí tự")),
});
exports.createPermision = createPermision;
const updatePermision = Joi.object({
    name: Joi.string()
        .min(5)
        .optional()
        .error(new ExtendableError_1.ValidatorError("Tên permision có ít nhất 5 kí tự")),
    name_query: Joi.string()
        .min(5)
        .optional()
        .error(new ExtendableError_1.ValidatorError("name_query permision có ít nhất 5 kí tự")),
    description: Joi.string()
        .min(5)
        .optional()
        .error(new ExtendableError_1.ValidatorError("Mô tả permision có ít nhất 5 kí tự")),
});
exports.updatePermision = updatePermision;
//# sourceMappingURL=permissionSchema.js.map