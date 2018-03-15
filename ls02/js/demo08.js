var a;
console.log(a);//undefined

function foo(x,y){
    console.log(x,y);
}
foo(1);

function fee(){

}//undefined

var feeReturnValue = fee();
console.log(feeReturnValue);
console.log(typeof null);//object
