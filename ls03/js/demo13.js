
var n1 = 12345.6789;
console.log(n1.toFixed(2));
console.log(n1.toPrecision(2));
console.log(n1.toString());
console.log(n1.toExponential(2));

console.log(NaN === NaN);
console.log(isNaN("12,3"));
console.log(Math.floor(3.8));  //下舍入
console.log(Math.floor(-3.8));
console.log(Math.ceil(3.2));  //上舍入
console.log(Math.ceil(-3.2));
console.log(Math.round(-3.2)); //3.5 将舍入为 4 ，将一个数舍为最接近的数
console.log(Math.round(-3.5));
console.log(Math.round(-3.8));

Number.MAX_VALUE// js中可表示的最大的数
Number.MIN_VALUE//js中可表示的最小的数
Number.NaN //not a number
Number.NEGATIVE_INFINITY //-infinity
Number.POSITIVE_INFINITY //infinity 大于Number.MAX_VALUE的值