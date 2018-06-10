
const [a, b, c, d, e] = 'hello';//相当于将'hello'转成了["h","e","l","l","o"]后解构
console.log(a); // "h"
console.log(b); // "e"
console.log(c); // "l"
console.log(d); // "l"
console.log(e); // "o"

let {length : len} = 'hello';
console.log(len);

let {toString: s1} = 123;
console.log(s1);

let {toString: s2} = true;
console.log(s2); 