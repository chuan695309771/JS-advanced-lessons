var x=45;
var test=function(){
    console.log('输出：',this.x);
}
var obj = {
    x:23
};
obj.test=test;
obj.test();
test();
// 输出： 23
// 输出： 45


var x=45;
var obj = {
    x:23,
    test:function(){
        function foo(){
            console.log(this.x);
        }
        foo();
    }
};
obj.test();


objA={name:"AA"};
objB={name:"BB"};
objA.foo=function(){
    console.log(this.time);
};
objA.foo();
objA.foo.call(objB);

