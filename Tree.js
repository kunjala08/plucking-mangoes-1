class Tree{
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=400;
        this.height=600;
        this.thickness = 50;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.thickness,option);
        this.image = loadImage("Plucking+mangoes/Plucking mangoes/tree.png");
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, -this.height/2, this.width, this.height);
        pop();
    }
}



  