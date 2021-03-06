import { expression } from "../../../processes/resolvers/expression";
import { intInterface } from "../../interfaces";

export const lInt = {
  type: "int",
  conv: (
    sentence: Array<string>,
    lineNumber: number
  ): boolean | intInterface => {
    sentence.splice(0, 1);
    const ar = sentence.join(" ").split("=");
    return {
      name: ar[0],
      val: expression(ar[1], lineNumber),
      path: "#int",
    };
  },
  role: "let",
};
