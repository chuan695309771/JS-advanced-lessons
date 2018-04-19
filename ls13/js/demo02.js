console.log(typeof Array);//function
console.log(typeof Function); //function
console.log(typeof Date); //function
console.log(typeof Number); //function
console.log(typeof String); //function
console.log(typeof Boolean); //function
console.log(typeof Math); //object
console.log(typeof JSON); //object



console.log(Object instanceof Function);//true
console.log(Object instanceof Object);// true
console.log(Boolean instanceof Function);// true
console.log(Boolean instanceof Object);// true
console.log(String instanceof Function);// true
console.log(String instanceof Object);// true
console.log(Number instanceof Function);// true
console.log(Number instanceof Object);// true
console.log(Function instanceof Function);// true
console.log(Function instanceof Object);// true
console.log(Array instanceof Function);// true
console.log(Array instanceof Object);// true
console.log(Date instanceof Function);// true
console.log(Date instanceof Object);// true
console.log(Math instanceof Function);// false
console.log(Math instanceof Object);// true
console.log(JSON instanceof Function);// false
console.log(JSON instanceof Object);// true