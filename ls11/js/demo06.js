function max(x,y){
	return x>y?x:y;
}
max(2,3);
//3


//立即执行表达式  常见形式
(function max(x,y){
	return x>y?x:y;
})
(2,3);
//3

(function max(x,y){
	return x>y?x:y;
}
(2,3));
//3

!function(x,y){
	return x==y?true:false;
}("5",5);
//false

!function(x,y){
	return x===y?true:false;
}("5",5);
//true

true &&function(a,b){
	return a>b?a:b;
}(5,9);