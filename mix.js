class Mother {
    constructor(name, bloodGroup, give) {
        this.name = name;
        this.bloodGroup = bloodGroup;
        this.give = give;
        this._momBlood = "AB";
        this._lastName = "Genmate B";
        this._money = 20000000;
    }

    getStatus() {
        this._money -= this.give;
        if (this._money < 0) return console.log("ติดหนี้!!");
        if (this._money <= 10000000) return console.log("เงินเหลือครึ่งกระเป๋าแล้วนะ!!");
        if (this._money < 20000000) return console.log("รวย!! พร้อมเปย์จ้า!!");
        return console.log("มหาเศรษฐี...เงินฉันไม่มีหมด!!");
    }
}

class Child extends Mother {
    constructor(name, bloodGroup, give, father) {  // :white_check_mark: #1,2
        super(name, bloodGroup, give);             // :white_check_mark: #3
        this.father = father;                      // :white_check_mark: #4
        this.childList = [];
    }

    checkBlood() {
        if (this.bloodGroup === this._momBlood) {  // :white_check_mark: #5
            return `ฉัน ${this.name} เป็นลูกรักของแม่`;
        }                                          // :white_check_mark: #6
        return `ฉัน ${this.name} เป็นลูกใครหว่า !!!`;
    }

    addChild(child) {
        this.childList.push(child);
        console.log(`Added ${child.name} to mom's family`);
    }

    showAllChild() {
        console.log(`--- Show all child ---`);
        this.childList.forEach((child) => {        // :white_check_mark: #7, #8
            console.log(`I'm ${child.name}`);
            child.checkBlood();                    // :white_check_mark: #9
            console.log(`----------------------`); // :white_check_mark: #10
        });
    }
}

const waiwai = new Child("Waiwai", "AB", 10000000, "dad"); // :white_check_mark: #11
const chong  = new Child("Chong",  "B",   5000000, "dad");
const my     = new Child("My",     "O",         20, "dad");


// console.log(waiwai);
waiwai.getStatus();
// waiwai.checkBlood();