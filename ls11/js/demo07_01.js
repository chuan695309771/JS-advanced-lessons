var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};

//(function () {  // IIFE开始
var x = 10;
document.onclick = function () {
    // console.log("x = ",x);
    alert("x = "+x);
};
//})();           // IIFE结束