class Car() {
	constructor(){
		this._color = "red";
		this._speed = 0;
	}
	
	get color(){
		return this._color;
	}

	set color(newColor){
		this._color = newColor;
	}

	get speed(){
		return this._speed;
	}

	set speed(newSpeed){
		this._speed = newSpeed;
	}

	accelerate() {
		this.speed += 1;
	}
}