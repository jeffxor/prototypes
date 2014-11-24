function Car() {
	this.color = "red";
	this.speed = 0;
	this.accelerate = function (){
		this.speed += 1;
	};
}