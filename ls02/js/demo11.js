console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("abc"));
console.log(Boolean({}));
 
if(new Boolean(false)){
    console.log("执行");
}