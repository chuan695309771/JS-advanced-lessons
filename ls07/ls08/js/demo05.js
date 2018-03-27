var a=new Array(5);
console.log(a);
//五个元素

var a=new Array('5');
console.log(a);
//字符


console.log(typeof new Function());//function
console.log(typeof new Array());//object
console.log(typeof new Date());//object

console.log(typeof new new Function());//object

console.log(Function instanceof Function);
console.log(Function instanceof Object);

console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true