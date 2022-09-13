import { rejects } from "assert";
import { PROVIDER } from "../../constants/provider";
import { User } from "../../models";
import { userService } from "../user";
import { IOAuth2Service } from "./interface";

const oauth2Service: IOAuth2Service = {
  success: async (data) => {
    try {
      let user = null;
      const provider = data.provider;
      if (provider == PROVIDER.GOOGLE) {
        user = await User.findOne({ google_id: data.id });
        if (user) return Promise.resolve(user);
      }
      if (provider == PROVIDER.FACEBOOK) {
        user = await User.findOne({ facebook_id: data.id });
        if (user) return Promise.resolve(user);

        if (provider == PROVIDER.GITHUB) {
          user = await User.findOne({ github_id: data.id });
          if (user) return Promise.resolve(user);
        }
      }
      const response = await userService.createOauth2(data);
      return Promise.resolve(response);
    } catch (err) {
      return Promise.reject(err);
    }
  },
  fail: async () => {},
};
export default oauth2Service;
