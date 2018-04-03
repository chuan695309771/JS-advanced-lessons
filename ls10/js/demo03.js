var userId =123;
document.onclick=function(){
    console.log("userId=",userId);
};


(function(){
    var a=2,b=3;
    if(a<b){
        var userId=234;
    }
}());