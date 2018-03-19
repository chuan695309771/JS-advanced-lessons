console.log(3===3);//t
console.log(3==="3");//f
console.log(3=="3");//t
console.log(3==new String(3));//t
console.log(3===new String(3));//f

var obj1=new String("xyz");
var obj2=new String("xyz");
console.log("xyz"===obj1);//f
console.log(obj1==obj2);//f
console.log(obj1===obj2);//f
console.log(obj1== new String("xyz"));//f

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);//f
console.log(obj1!==obj2);//t
console.log(obj1!=obj2);//t
console.log(obj1!=new String("xyz"));//t


console.log(2==2);//t
console.log(new Number(2)==new Number(2));//f
console.log(2==new Number(2));//t