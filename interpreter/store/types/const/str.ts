import { typeCheck } from "../../typeCheck/typeCheck";
import { throwEr } from "../../utils/throw";

export const cStr = {
  type: "str",
  conv: (sentence: Array<string>, lineNumber: number) => {
    sentence.splice(0, 1);
    const ar: Array<string> = sentence.join(" ").split("=");
    if (typeCheck(ar[1]) === "string") {
      return {
        name: ar[0],
        val: ar[1].split(`"`)[1],
        path: "$str",
      };
    } else {
      throwEr(`cant assign ${ar[1]} to string`, lineNumber);
    }
  },
  role: "const",
};
