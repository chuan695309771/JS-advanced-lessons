objA={name:"AA",x:1};
objB={name:"BB",x:5};
function test(){
    console.log(this.name,this.x);
}
objA.fun=test;
objA.fun();
objA.fun.call(objB);