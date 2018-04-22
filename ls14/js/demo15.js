var o3 = {};
o3.y = "yyy";
Object.defineProperty(o3,"x",
    {configurable:true,enumerable:false,writable:true,value:"xxx"}
);
console.log(Object.keys(o3));
console.log(Object.getOwnPropertyNames(o3));


console.log(o3.hasOwnProperty("x"));
console.log(o3.propertyIsEnumerable("x"));

for(var k in o3){ 
    console.log(k,o3[k]);
}
console.log("x" in o3,"y" in o3);
console.log(o3.hasOwnProperty("x"),o3.hasOwnProperty("y"));