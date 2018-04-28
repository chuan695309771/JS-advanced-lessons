var point={
    x:0,
    y:0,
    moveTo:function(x,y){
        function moveToX(){
            this.x=x;
        }
        function moveToY(){
            this.y=y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);