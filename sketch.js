/// <reference path="./p5.global-mode.d.ts" />

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(30);

	avg_velocity = windowHeight/50;
	rockets = [];
	particels = [];
	n_particel = 20;
	n_scalar = 2;
	propability_start = 0.1;
	var_velocity = 3;
}

function draw() {
	var window_vector = createVector(windowWidth, windowHeight);
	background(0, 0, 0);
	// if (rockets.length <  1 && particels.length <  1 ) {
	if (random(1)<propability_start) {
		var start_position = createVector(random(windowWidth), windowHeight - 20.0);
		var start_velocity = createVector(0.0, -(avg_velocity+random(var_velocity)));
		rockets.push(new Particel(start_position, start_velocity,random(255)));
	}
	for (var i = rockets.length - 1; i >= 0; i--) {
		rockets[i].move();
		rockets[i].show();

		// Explode at the highest point
		if (rockets[i].velocity.y >= 0) {
			for (var j = 0; j < n_particel; j++){
					var start_position = createVector(rockets[i].position.x, rockets[i].position.y);
					// var start_position = Object.assign({},fireworks[i].position); // copying the object (not referencing) producesses error. methods are not copied.
					scalar = random(n_scalar);
					var start_velocity = createVector(cos(j/n_particel*PI*2)*scalar, sin(j/n_particel*2*PI)*scalar);
					particels.push(new Particel(start_position, start_velocity, rockets[i].hu));
			}
			rockets.splice(i, 1);
		}
	}

	// let difference; 
	for (var i = particels.length - 1; i >= 0; i--) {
		particels[i].move();
		particels[i].show();

		// Delete particels when out of screen
		var difference = createVector(0,0);
		difference.x =  window_vector.x - particels[i].position.x;
		difference.y =  window_vector.y - particels[i].position.y;
		if (difference.x < 0 || difference.y < 0) {
			particels.splice(i, 1);
		}
	}
	// console.log(particels.length);
}