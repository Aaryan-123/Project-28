class Mango {
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1
        }
        this.body = Bodies.circle(100,648,30,options);
        World.add(world,this.body);

        this.image = loadImage('Project28/mango.png');
    }
    display() {
        var pos = this.body.position;

    }
}