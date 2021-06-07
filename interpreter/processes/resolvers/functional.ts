import { functions } from "../../store/functionStore";
import { genericList } from "../../store/genericTypes";
import { lineProperties } from "../../store/lineProperties";

export class Mind {
  variables = {};
  constructor() {
    return this;
  }
  push(line: lineProperties, variables) {
    this.variables = variables;
    this.run(line);
  }
  run(line: lineProperties) {
    this.breakdown(line.words, line.lineNumber);
  }
  breakdown(words: Array<string>, lineNumber: number) {
    const word = words.join(" ").split(/[()]/g);
    return functions[word[0]].do(word[1], this.variables, lineNumber + 1);
  }
}
