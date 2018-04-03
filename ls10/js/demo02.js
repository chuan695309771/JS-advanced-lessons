
//JS 词法作用域
var name ="Jack";
function echo(){
    console.log(name);
}
echo();


var scope ="global";
function checkScope(){
	var scope ="local";
	return function(){
		return scope;
	};
}
console.log(checkScope()());
//local
