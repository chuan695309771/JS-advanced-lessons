var a=10,
    b=20;
function fn(){
    //fn局部作用域
    var a=100,
        c=200;
    //console.log(a,b,c,d);
    function bar(){
        var a=500,
            d=600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();