import * as Joi from "joi";
import { ValidatorError } from "../../helpers/ExtendableError";

const createPermision = Joi.object({
  name: Joi.string()
    .min(5)
    .required()
    .error(new ValidatorError("Tên permision có ít nhất 5 kí tự")),
  name_query: Joi.string()
    .min(5)
    .required()
    .error(new ValidatorError("name_query permision có ít nhất 5 kí tự")),
  description: Joi.string()
    .min(5)
    .required()
    .error(new ValidatorError("Mô tả permision có ít nhất 5 kí tự")),
});

const updatePermision = Joi.object({
  name: Joi.string()
    .min(5)
    .optional()
    .error(new ValidatorError("Tên permision có ít nhất 5 kí tự")),
  name_query: Joi.string()
    .min(5)
    .optional()
    .error(new ValidatorError("name_query permision có ít nhất 5 kí tự")),
  description: Joi.string()
    .min(5)
    .optional()
    .error(new ValidatorError("Mô tả permision có ít nhất 5 kí tự")),
});

export { createPermision, updatePermision };
