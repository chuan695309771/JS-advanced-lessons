function foo(x,y,z){}
console.log(foo.length);//3

function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}

var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();
obj.foo2();

var func=function(n){
    if(n<=0)
        return 1;
    else
        return n*func(n-1);
};
console.log(func(4));

(function(n){
    if(n<=0)
        return 1;
    else
        return n*arguments.callee(n-1);
}(4));

function swim(m,n){
    console.log("i'm"+this.name+"i can swim ___",m,n);

}

var bird={
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+"i can fly____",m,n);
    }
};