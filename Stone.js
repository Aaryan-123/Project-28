class Stone {
    constructor(x,y,width,height){

      this.body = Bodies.rectangle(x,y,10,10);
      this.width = width;
      this.height = height;
      World.add(world,this.body);

      this.image = loadImage("Project28/stone.png");
    }
  
    display() {
      // this.body.position.x = mouseX;
      // this.body.position.y = mouseY;
    }
  }
  