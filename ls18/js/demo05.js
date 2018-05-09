const bar = ["a", "b", "c"];
Array.from(bar);
Array.from('foo');

Array.of(7);      
Array.of(1, 2, 3); 
Array(7);          
Array(1, 2, 3);    

var arr1 = [1,3,4];
console.log(Array.isArray(arr1));

function foo(){
    console.log(Array.isArray(arguments));
    console.log(Array.prototype.pop.call(arguments));
}
foo(3,2,5);