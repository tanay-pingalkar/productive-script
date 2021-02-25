import { expression } from "../processes/resolvers/expression";
import { typeCheck } from "./typeCheck/typeCheck";

export const functions = {
  "*pt": {
    do: (data, variables, lineNumber: number) => {
      const type = typeCheck(data);
      switch (type) {
        case "string":
          console.log(data.split(`"`)[1]);
          break;
        case "variable":
          console.log(variables[data].val);
          break;
        case "expression":
          console.log(expression(data, lineNumber));
      }
    },
    des: "this will print",
  },
};
