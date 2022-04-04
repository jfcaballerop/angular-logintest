import { types } from "../actions.model";
import { ConfigurationModel } from "../configuration.model";

const PASS_TYPE = "Password";

export const GENERAL_IMPLEMENTATION_PASS: ConfigurationModel = {
  label: "password",
  type: PASS_TYPE,
  icon: 'key',
  placeholder: 'Password'
}