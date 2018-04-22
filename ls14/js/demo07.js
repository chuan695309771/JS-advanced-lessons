var obj={
	x:1,
	y:2
};
for(var k in obj){
	console.log(k,obj[k]);
}
//x 1
//y 2

var obj={
	x:1,
	y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
	console.log(k,obj[k]);
}
 //y 2