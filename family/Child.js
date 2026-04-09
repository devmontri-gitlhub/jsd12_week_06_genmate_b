const Mother = require("./Mother.js");

class Child extends Mother {
  constructor(name, bloodGroup, give) {
    super(name, bloodGroup, give);
    this.childList = [];
  }
  checkBlood() {
    if (this.bloodGroup === this._momBlood) {
      console.log(`ฉันชื่อ ${this.name} เป็นลูกรักของแม่`);
    } else {
      console.log(`ฉันชื่อ ${this.name} เป็นลูกใครหว่า?`);
    }
  }
}

module.exports = Child;