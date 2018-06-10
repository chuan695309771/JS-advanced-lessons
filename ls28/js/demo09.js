var a = 1;var b = 2;var c = 3;
console.log(a,b,c);

var [a, b, c] = [1, 2, 3];
console.log(a,b,c);

let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);

let [ , , xx] = ["foo", "bar", "baz"];
console.log(xx);

let [x, , y] = [1, 2, 3];
console.log(x,y);

let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);

let [d, e, ...f] = ['a'];
console.log(d,e,f);