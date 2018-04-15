var tmp = 100;//注意：词法作用域,形成的闭包是否包含此行的变量tmp？
function foo(x) {
    var tmp = 3;//注意：词法作用域，思考：若屏蔽此行，会输出什么？foo之外的tmp是否为闭包的一部分？
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); 
fee(10);
fee(10);
fee(10);

function f1(m){
	var z = 100;
	function f2(x) {
    	return function (y) {
        	console.log(x + y + (++z));
    	}
	}
	return f2(m);
}
var f3 = f1(2); 
f3(10);
f3(10);

function fn() {
    var max = 10;//若屏蔽此行，则输出为多少？
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);