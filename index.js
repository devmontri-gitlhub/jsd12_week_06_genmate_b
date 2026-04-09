const Mother = require("./family/Mother.js");
const Child = require("./family/Child.js");
const Family = require("./family/Family.js");

const myFamily = new Family("เลือดข้นทรัพย์จาง");
const waiwai = new Child("ไวไว", "AB", 14000000);
const chong = new Child("ชง", "B", 5900000);
const my = new Child("มาย", "O", 29);
const tri = new Child("ตรี", "AB", 90000);
const arm = new Child("อาม", "O", 10000);

myFamily.addChild(waiwai);
myFamily.addChild(chong);
myFamily.addChild(my);
myFamily.addChild(tri);
myFamily.addChild(arm);
myFamily.showAllChild();