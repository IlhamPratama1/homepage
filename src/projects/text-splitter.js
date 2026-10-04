import SplitType from "split-type";

export class TextSplitter {
  constructor(el, { splitTypeTypes } = {}) {
    this.split = new SplitType(el, splitTypeTypes ? { types: splitTypeTypes } : {});
  }
  getChars() { return this.split.chars; }
  revert() { return this.split.revert(); }
}
