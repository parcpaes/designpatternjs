
export class TextProcessor {
    constructor(listStrategy) {
      this.listStrategy = listStrategy;
    }

    setListStrategy(listStrategy) {
      this.listStrategy = listStrategy;
    }

    appendList(items) {
      this.listStrategy.addListItems(items);
    }

    toString() {
      return this.listStrategy.toString();
    }
  }