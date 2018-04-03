console.log(a);
var a=1;
console.log(a);

//等价于
var a;
console.log(a);
a=1;
console.log(a);



console.log(a,b);
var b =23;
console.log(a,b);
var a = b;
console.log(a,b);


foo();
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

//等价于
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();


foo();
var foo=function(){
    console.log("foo");
};

console.log(foo);
var foo=function(){
    console.log("foo");
};
foo();