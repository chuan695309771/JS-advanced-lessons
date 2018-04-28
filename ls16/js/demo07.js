function Point(x,y){
    this.x=x;
    this.y=y;
    this.moveXY=function(x,y){
        function moveX(x){
            this.x+=x;
        }
        function moveY(y){
            this.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p=new Point(2,3);
p.moveXY(1,1);
console.log(p);