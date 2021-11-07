class Port {
    constructor(x, y) {
      var options = {
        'density':1,
        'friction': 1,
        'restitution':1
      };
      this.body = Bodies.rectangle(x, y, 100, 500, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = 50
      pos.y = 500
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('orange')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  