class Ground{

    constructor(x,y,width,height){

        
  var groundOptions = {isStatic:true};
  this.ground = Bodies.rectangle(x,y,width,height,groundOptions);
  this.width = width;
  this.height = height;
  World.add(world,this.ground);
    }
    display(){
      push();
        fill("brown")
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
        pop();
    }
}