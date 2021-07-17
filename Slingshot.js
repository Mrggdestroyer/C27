class Slingshot
{
    constructor(bodyA,bodyB)
    {
        var options = {
            length:10,
            stiffness:0.05,
            bodyA:bodyA,
            bodyB:bodyB
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot)
    }

    display()
    {
        var pointA = this.slingshot.bodyA.position
        var pointB = this.slingshot.bodyB.position
        push();
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
}