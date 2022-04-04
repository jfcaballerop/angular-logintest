const MAIN_BUTTON_CLICKED = "MAIN_BUTTON_CLICKED";
const SECONDARY_BUTTON_CLICKED = "SECONDARY_BUTTON_CLICKED";
const USER_ONFOCUS_OUT = "USER_ONFOCUS_OUT";
const PASS_ONFOCUS_OUT = "PASS_ONFOCUS_OUT";
const GENERIC = "GENERIC";

// The available actions types
export const types = {
  MAIN_BUTTON_CLICKED,
  SECONDARY_BUTTON_CLICKED,
  USER_ONFOCUS_OUT,
  PASS_ONFOCUS_OUT,
  GENERIC
}
// The event emitter type
export interface InputActionModel {
  type?: string;
  payload?: any;
}