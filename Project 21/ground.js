class ground{
constructor(x,y,w,h){
this.w = w;
this.h = h;
let options = {
    isStatic:true
}
this.body = Bodies.rectangle(x,y,w,h,options);
World.add(world,this.body);
}
show(){
rectMode(CENTER);
rect(this.body.position.x,this.body.position.y,this.w,this.h);
}
}