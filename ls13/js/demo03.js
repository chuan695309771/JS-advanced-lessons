var o={
	_x:1.0,
	get x(){
		return this._x;
	},
	set x(val){
		this._x=val;
	}
};
console.log(o.x); //1
o.x=2;
console.log(o.x,o._x);  //2  2


var p1={
	_name:"Jack",
	_age:23,
	set age(val){
		if(val>0&&val<150){
			this._age=val;
		}else{
			console.log("请设置正常的年龄");
		}
	},
	get age(){
		return this._age;
	}
};
p1.age=178;