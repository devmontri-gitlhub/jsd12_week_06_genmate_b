class Mother {
  static money = 20000000;
  constructor(name, bloodGroup, give) {
    this.name = name;
    this.bloodGroup = bloodGroup;
    this.give = give;
    this._momBlood = "AB";
    this._lastName = "Genmate B";
    //this._money = 20000000;
  }
  getStatus() {
    //this._money -= this.give;
    Mother.money -= this.give;
    if (Mother.money < 0) {
      return console.log(`แม่ติดลบแล้วลูก!! (ยอด: ${Mother.money})`);
    } else if (Mother.money <= 50000) {
      return console.log(`ไม่อยากแบ่งให้แล้วนะ!! (ยอด: ${Mother.money})`);
    } else if (Mother.money <= 500000) {
      return console.log(`เงินใกล้จะหมดแล้วนะลูก!! (ยอด: ${Mother.money})`);
    } else if (Mother.money <= 10000000) {
      return console.log(`เงินเหลือครึ่งเดียวแล้วนะ!! (ยอด: ${Mother.money})`);
    } else if (Mother.money <= 20000000) {
      return console.log(`รวย!! พร้อมเปย์จ้า!! (ยอด: ${Mother.money})`);
    } else {
      console.log(`มหาเศรษฐี...เงินฉันไม่มีหมด!! (ยอด: ${Mother.money})`);
    }
  }
}

module.exports = Mother;