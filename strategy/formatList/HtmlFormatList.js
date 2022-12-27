import { TextFormatList } from "./TextFormat.js";

export class HtmlFormatList extends TextFormatList {
    constructor() {
      super();
      this.ul = document.createElement("ul");
    }
    addListItems(items) {      
      for (let item of items) {        
        let li = document.createElement("li");
        li.textContent = `${item}`;        
        this.ul.append(li);
      }      
    }

    toString() {      
      return this.ul.outerHTML;
    }
  }