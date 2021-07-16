class Rubber {
	constructor(x,y,r) {
	var options = {
		'density':0.3,
		'friction': 5,
		'restitution':1
	}

	// assign options to the rubber ball
	
	this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.r = 50;
      this.r = 50;
      
      World.add(world, this.body);
	}

	
	display()
	{
	  var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      ellipse(CENTER);
     // stroke("green");
      //strokeWeight(5);
      fill("pink");
      ellipse(0, 0, this.r, this.r);
      pop();
	}

}