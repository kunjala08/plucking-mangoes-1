class Stone{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0,
            density:1.2,
            friction:1
        }
      
       this.x=x;
       this.y=y;
       this.r=r;
       this.body=Bodies.circle(x,y,r,option)
       this.image=loadImage("Plucking+mangoes/Plucking mangoes/stone.png")
       World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
       
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0,0,this.r*2,this.r*2);
        pop()
    }
}