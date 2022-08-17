import * as Joi from "joi";
import { REQUEST } from "../../constants/request";
import { ValidatorError } from "../../helpers/ExtendableError";

const createRequest = Joi.object({
  type: Joi.string()
    .required()
    .error(new ValidatorError("Vui lòng chọn loại đơn.")),
  reason: Joi.string()
    .required()
    .error(new ValidatorError("Vui lòng nhập lí do.")),
  information: Joi.array()
    .when("type", { is: REQUEST.SUPPORT_DEVICE, then: Joi.optional() })
    .required()
    .items(
      Joi.object({
        date: Joi.number()
          .required()
          .error(new ValidatorError("Vui lòng chọn ngày nghỉ.")),
        options: Joi.object({
          morning: Joi.boolean().required(),
          afternoon: Joi.boolean().required(),
        })
          .required()
          .error(new ValidatorError("Vui lòng chọn buổi nghỉ.")),
        time: Joi.number().when("....type", {
          is: REQUEST.WORK_LATE,
          then: Joi.number()
            .required()
            .error(new ValidatorError("Vui lòng chọn thời gian đi trễ.")),
          otherwise: Joi.number().optional().allow(null, ""),
        }),
      })
    ),
});

export { createRequest };
