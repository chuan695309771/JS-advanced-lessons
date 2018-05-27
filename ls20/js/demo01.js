var str="xx-xxy-xx";
var a =str.split("-");
console.log(a);
//(3) ["xx", "xxy", "xx"]

var str="xx-x*y-xx";
var a =str.split(/[-*]/gi);
console.log(a);
//(4) ["xx", "x", "y", "xx"]

"abcdef".replace("a","x");

"a2ds".replace(/\d/gi,"X");
//"aXds"

"a2ds".replace(/\w/gi,"X");
//"XXXX"

"a2ds".replace(/\W/gi,"X");
//"a2ds"

"a2ds".replace(/\D/gi,"X");
//"X2XX"

