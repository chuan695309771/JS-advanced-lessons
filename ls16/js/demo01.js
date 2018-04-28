var a=1;
function f1(){
	var b=2;
	function f2(){
		console.log(a,b);
	}
	f2();
}
f1();

var a=10;b="Hi";
function thisTest2(){
    this.a=20;
    delete this.b;
    this.c="新添加属性";
}
thisTest2();
console.log(a,c);

function thisTest2(){
    var a=b=2;//相当于var a=2;局部变量
}             //      b=2；全局变量
thisTest2();
console.log(b);