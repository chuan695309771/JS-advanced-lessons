var str="return a<b?a:b";
var min = new Function("a","b",str);
min(2,3);



var max =new Function("a","b","return a>b?a:b");
max(2,3);

