import { types } from "../types";
import { isExpre } from "./isExpr";
import { isString } from "./isString";

export const typeCheck = (str: string): types => {
  if (isString(str)) {
    return "string";
  } else if (isExpre(str)) {
    return "expression";
  } else {
    return "variable";
  }
};
