class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";
  
    World.add(world, this.body);
  }

 
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  life(){
    push();
    fill ("white");
    textSize(20);
    text("computer",width-300,50);
    fill (this.life1);
    rect(width-420,70,70,30);
    fill (this.life1);
    rect(width-350,70,70,30);
    fill (this.life1);
    rect(width-280,70,70,30);
    

    pop();
  }
}

