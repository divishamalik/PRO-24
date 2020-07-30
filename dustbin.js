class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
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
      fill("red");
      //translate(pos.x,pos.y);
      //rotate(this.body.angle);
      rect(pos.x,pos.y,this.width,this.height);
      pop();
    }
  };
 