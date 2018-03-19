var a=[1,2,3];
var b=a;
console.log(a,b);
b.pop();  //删除并返回数组的最后一个元素
console.log(a,b);
b=[4,5,6];
console.log(a,b);

function foo(x){
    x.push(4);
    x=[5,6,7];
    x.push(8);
    // console.log(x);
}
var a=[1,2,3];
foo(a);
console.log(a);

function foo(x){
    x.push(4);
    x.length=0;
    x.push(5,6,7,8);
}
var a =[1,2,3];
foo(a);
console.log(a);

