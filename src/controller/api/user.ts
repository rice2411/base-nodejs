import { userService } from "../../service/user";
import QueryOptions from "../../dtos/QueryOptions";
import { PAGING_DEFAULT } from "../../constants/paging";
import UpdateUserRequestDTO from "../../dtos/request/user/UpdateUserRequestDTO";

const userController = {
  list: async (req, res, next) => {
    try {
      const search = req?.query.search;
      const options: QueryOptions = {
        page: req?.query.page ?? PAGING_DEFAULT.PAGE,
        limit: req?.query.limit ?? PAGING_DEFAULT.LIMIT,
        search,
        is_paginate:
          req?.query?.is_paginate == false ||
          req?.query?.is_paginate == "false" ||
          req?.query?.is_paginate == 0
            ? false
            : true,
      };
      const result = await userService.list(options);
      return res.success("OK", result);
    } catch (error) {
      next(error);
    }
  },
  get: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const user = await userService.get(userId);
      return res.success("OK", user);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const request = new UpdateUserRequestDTO().requestDTO(req.body);
      const updateUser = await userService.update(request, userId);
      return res.success("OK", updateUser);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  deactive: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const request = new UpdateUserRequestDTO().requestDTO(req.body);
      const updateUser = await userService.deactive(request, userId);
      return res.success("Khoá tài khoản thành công", updateUser);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  get_me: async (req, res, next) => {
    try {
      const user = await userService.get_me(req);
      return res.success("OK", user);
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
  removeDataTest: async (req, res, next) => {
    try {
      const result = await userService.removeDataTest();
      return res.success("OK", null);
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
};

export default userController;
