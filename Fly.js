class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }
    //attach(body){
        //this.rope.bodyA = body;
    //}
    
    fly(){
        this.fly.bodyA=null;
    }

    Launch(bodyA)
    {
        this.fly.bodyA=bodyA;
    }

    display()
    {
        
        
    }
} 
