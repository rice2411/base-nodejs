import { v4 as uuidv4 } from "uuid";
import { ACCOUNT_TYPE } from "../../../constants/account";
import { NAME_DEFAULT } from "../../../constants/user";
export default class FacebookRequestDTO {
  public facebook_id?: string;
  public first_name?: string;
  public last_name?: string;
  public avatar?: string;
  public email?: string;
  public password?: string;
  public username?: string;
  public type_account?: string;

  constructor(data) {
    console.log(data);
    const email = data?.emails[0]?.value;
    const avatar = data?.photos[0]?.value;
    if (email) {
      this.email = email;
    }
    if (avatar) {
      this.avatar = avatar;
    }
    this.facebook_id = data?.id;
    this.first_name = data?.name.familyName;
    this.last_name = data?.name.givenName;

    this.password = uuidv4();
    this.username = NAME_DEFAULT + this.facebook_id;
    this.type_account = ACCOUNT_TYPE.FACEBOOK;
  }
  get() {
    return this;
  }
}
