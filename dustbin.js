class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.69,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      fill("green");
      console.log("dustbin");
      rect(pos.x,pos.y,this.width,this.height);
      pop();
    }
  };
 