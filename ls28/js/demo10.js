var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);

var { bar2, foo2 } = { foo2: "ccc", bar2: "ddd" };//顺序不同，没关系
console.log(foo2,bar2);

var { baz3 } = { foo3: "ccc", bar3: "ddd" };
console.log(baz3);


var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);

let obj1 = { first: 'hello', last: 'world' };

let { first: f, last: l } = obj1;

let { first, last } = obj1;
console.log(first,last);

var { foo6: baz6 } = { foo6: "aaa", bar6: "bbb" };
console.log(baz6);