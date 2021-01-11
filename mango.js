class Mango {
    constructor(x, y,r) {
      var options = {
          'restitution':0,
          'friction':1,
          'isStatic':true
      } 
     
      this.x = x;
      this.y = y;
      this.r = r;
     
      this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
      this.image = loadImage("mango.png"); 
      World.add(world, this.body);
   }
    display(){
      var Pos =this.body.position;
      push();
      translate(Pos.x, Pos.y);
      ellipseMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
  }
  