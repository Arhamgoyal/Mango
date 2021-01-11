class Tree{
    constructor(x, y) 
    {
        var options = {
            isStatic:true,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 450, 600, options);
        this.width = 450;
        this.height = 600;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0,this.width,this.height);
        pop();
      }
}