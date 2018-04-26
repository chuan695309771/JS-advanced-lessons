function Person(){
	this.name="Jack";
	console.log("Hi");
}
var p=new Person();
console.log(p.name);

function Person(name,age){
	this.name=name;
	this.age=age;
	console.log("Hi");
}
Person.prototype.sayHi=function(){
	console.log(this.name,this.age)
}
var p=new Person("Mike",23);
console.log(p.sayHi());