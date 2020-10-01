class Tree {
    constructor(x,y,width,height) {
        var options = {
            isStatic : true
        }
        this.image = loadImage('tree.png');
        this.width = width;
        this.height = height;
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(pos.x, pos.y, this.width, this.height);
    }
}