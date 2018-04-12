
//z = 2*(x+1)-3*y*y;
//c = 2*a*a-3*(b-1);
//k = 2*(i+1)-3(j-1);
function foo(x,y,c1,c2){
    return 2*c1(x)-3*c2(y);
}
function f1(x){return x+1;}
function f2(x){return x-1;}
function f3(x){return x*x;}
console.log(foo(1,1,f1,f3));//1
console.log(foo(1,1,f3,f2));//2
console.log(foo(1,1,f1,f2));//4

function pow(x){
    return x*x;
}
var arr=[1,2,3,4,5,6,7,8,9];
arr.map(pow);

 