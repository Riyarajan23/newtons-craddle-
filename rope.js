class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 200
        }
        
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    

    display(){
        
       
            var pointA = this.sling.bodyA.position;
           
            var pointB = this.sling.bodyB.position;
            push()
           
           

            var anchorX=pointB.x+this.offsetX
            var anchorY=pointB.y+this.offsetY
                 strokeWeight(7);
            line(pointA.x, pointA.y, anchorX,anchorY);
           
            
            
           pop ();
        }
    
    
}