var a={};
a.__proto__;//查看原型

var newObj = Object.create(obj);
var newObj2 = Object.create(obj);
newObj.age = 23;

console.log(newObj.__proto__ === obj);
console.log(newObj2.__proto__ === obj);
