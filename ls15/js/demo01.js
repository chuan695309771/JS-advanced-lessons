var obj1={x:1}
var obj2=Object.create(obj1);
obj1.y=2;
console.log(obj1,obj2)


var Person=function(name){
	this.name=name;
}
var p1=new Person("abc");
console.log(p1.name);
p1 instanceof Person;


var a={};
a.__proto__;//查看原型