function f1(){
	var x=1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3=f1();
console.log(f3);
console.log(f3);



function createInc(startValue){
    return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出多少？ 6
console.log(inc(2));//输出多少？ 8
inc = createInc(5);
console.log(inc(1));//输出多少？ 6
