var o1 = {};
Object.defineProperty(o1,"x",{
    value:12,
});
o1.x = 34;
console.log(o1.x);

var o2 = Object.create(o1);
o2.x = 56;
console.log(o2.x);