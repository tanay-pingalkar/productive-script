import { dimention, name } from "../store/types";
import { identifier } from "../store/identities";
import { lineProperties } from "../store/lineProperties";
import { Declare } from "./resolvers/declare";
import { Mind } from "./resolvers/functional";

export class tokenizer {
  dimention: dimention;
  declare = new Declare();
  functions = new Mind();
  constructor(ar: dimention) {
    this.dimention = ar;
  }
  tokenize() {
    this.dimention.forEach((words, i) => {
      const lineType = this.lineType(words);
      if (lineType === "let" || lineType === "constant") {
        this.declare.push({
          words: words,
          lineNumber: i,
          lineType: lineType,
        });
      } else if (lineType === "functional") {
        this.functions.push(
          {
            words: words,
            lineNumber: i,
            lineType: lineType,
          },
          this.declare.variables
        );
      }
    });
  }
  lineType(words: Array<string>): name {
    if (words[0].startsWith(identifier["#"].symbol)) {
      return identifier["#"].name;
    } else if (words[0].startsWith(identifier["$"].symbol)) {
      return identifier["$"].name;
    } else {
      return "functional";
    }
  }
}
