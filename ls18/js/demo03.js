var a1=[,"abc"];
console.log(a1.length);

for (var i in a1){
    console.log(i,a1[i]);
}
console.log(0 in a1,1 in a1);

var a2 = new Array(3);
console.log(a2.length);
console.log(a2);