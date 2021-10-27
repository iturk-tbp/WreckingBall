class Ball  {
  constructor(x,y,radius,angle){
    var options = {
      density: 1,
      frictionAir: 0.005
    }
    this.body = Bodies.circle(x,y,radius,options)
    this.radius = radius
    this.image1 = loadImage("sprites/smoke.png");
    World.add(world,this.body)
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    var angle = this.body.angle
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)
    ellipse(0,0,this.radius,this.radius)
    pop()
    if(this.body.velocity.x>10 && this.body.position.x>200)
    {
      var position = [this.body.position.x,this.body.position.y]
      this.trajectory.push(position);
    }
    for (var i = 0; i <this.trajectory.length; i++){
      image (this.image1, this.trajectory[i][0],this.trajectory[i][1])
    }
  }
}
