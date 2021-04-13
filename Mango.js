class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        }
       
        this.r=r;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,r,options)
        this.image = loadImage("Plucking+mangoes/Plucking mangoes/mango.png");
        World.add(world, this.body)
    }
    display(){
       var mangoPos = this.body.position;
        push();
        translate(mangoPos.x, mangoPos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2,this.r*2);
        pop();
        
    }
}