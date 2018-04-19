var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);
console.log(obj.str);
console.log(obj.show());
console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);


var newObj = Object.create(obj);//newObj的原型是obj
newObj.age = 23;
console.log(newObj.num);
console.log(newObj.str);
console.log(newObj.show());
console.log(newObj.age);//自有属性
console.log(newObj.__proto__);
console.log(newObj.__proto__ === obj);