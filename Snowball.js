class Snowball{

  constructor(x,y,r){

    var options = {restitution:0.74, density:0.8 , friction:0.4}
    this.body = Bodies.circle(x,y,r, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("snowball.png");
    World.add(world,this.body);


  }

  display(){

    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(0,0,20,20);
    imageMode(CENTER);
    image(this.image, 0 ,0 ,40, 40);
    pop();

  }

        
}

