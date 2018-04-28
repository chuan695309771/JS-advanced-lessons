var Person=function(name,age){
	this.name=name;
	this.age=age;
	this.showMe=function(){
		console.log(this.name,this.age);
	}
}
var p1=new Person("Mike",23);
p1.showMe();