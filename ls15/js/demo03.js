var proObj={
    z:3
};

var obj=Object.create(proObj);
obj.x=1;
obj.y=2;

console.log(obj.x);
console.log(obj.y);
console.log(obj.z);