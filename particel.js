function Particel(start_position, start_velocity, hu){
    let start_acceleration = createVector(0.0, 0.2);
    let radius = 5;

    this.position = start_position;
    this.velocity = start_velocity;
    this.acceleration = start_acceleration;
	this.hu = hu;

    this.move = function(){
		this.position.add(this.velocity);
		this.velocity.add(this.acceleration);
	}
	
    this.show = function(){
		// strokeWeight(4);
		// stroke(255, 255, 255);
		colorMode(HSB)
		fill(this.hu,255,255);
        ellipse(this.position.x ,this.position.y ,radius*2,radius*2);
    }
}