class Ball{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.5,
            'friction':0.1,
            'density':0.4,
            isStatic:false
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
       
        
      //  this.image = loadImage("sprites/base.png");
      //this.poly=loadImage("polygon.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill ("yellow")
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
}