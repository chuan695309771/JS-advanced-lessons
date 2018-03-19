console.log(2>1&&4<5);
console.log(true&&(!2));
console.log(false&&("2"==2));
console.log(false&&false);

// 最常见情况（运算符两边的操作数都是布尔类型）
// - 对于&&来说，除了两侧都为真时为真，其他情况都为假
// - 对于||来说，除了两侧都为假时为假，其他情况都为真


console.log(2>1||4<5);
console.log(true||(!2));
console.log(false||("2"==2));
console.log(false||false);
