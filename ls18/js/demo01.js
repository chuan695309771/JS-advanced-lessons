var arr1=[1,2,3,"4"];
var arr2=new Array(5);
console.log(arr2);
for(var i=0;i<arr2.length;i++){
    arr2[i]=i;
}

var arr22=[];
for(var i=0;i<5;i++){
    document.onclick=function(){
        arr22[i]=i;
    }
}

var arr3=new Array(1,2,3,4);
console.log(arr1,arr2,arr3);