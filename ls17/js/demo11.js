function Foo() {}
var f = new Foo();
console.log(f.constructor.name);

function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);

function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); 
console.log(Father.prototype.constructor); 
Father.prototype.constructor = Father;    
console.log(Father.prototype.constructor); 
var one = new Father(25);