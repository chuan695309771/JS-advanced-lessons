var arr2=[1,3,5,7,9];
var newArray=arr2.filter(function (a){
    return (a>2&&a<8)?true:false;
});
console.log(newArray,arr2);

