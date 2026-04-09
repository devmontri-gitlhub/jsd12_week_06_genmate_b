class Family {
  constructor(familyName) {
    this.familyName = familyName;
    this.familyList = [];
  }
  addChild(Child) {
    this.familyList.push(Child);
    console.log(`เพิ่ม ${Child.name} เข้าสู่ครอบครัวนี้!!!`);
  }
  showAllChild() {
    console.log(`
-----------------------------
--- ${this.familyName} ครอบครัว ---
-----------------------------`);
    this.familyList.forEach((personChild) => {
      personChild.checkBlood();
      personChild.getStatus();
      console.log("-----------------------------");
    });
  }
}

module.exports = Family;