(function(){
    var str_a="a";
    var str_b=str_a;
    str_b="b";
    console.log(str_a,str_b);
}
())

var obj_c={x1:2,y1:3};
var obj_d = {x2:2,y2:3};
console.log(obj_c.x1===obj_d.x2);
console.log(obj_c===obj_d);
console.log({m:1}==={m:1});
