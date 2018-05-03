function Person(name){
    this.name=name;
}
Person.prototype.age=22;
Person.prototype.showName=function(){console.log(this.name);};
function Student(id){
    this.id=id;
}