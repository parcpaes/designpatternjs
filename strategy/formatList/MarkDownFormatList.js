import { TextFormatList } from "./TextFormat.js";

export class MarkDownFormatList extends TextFormatList {
  constructor() {
    super();
    this.buffer = [];
  }
  addListItems(items) {
    for (let item of items) {
      this.buffer.push(` * ${item}`);
    }
  }

  toString() {
    return this.buffer.join("\n");
  }
}