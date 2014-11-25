class Person(){
	constructor(name, family){
    	this._name = name;
	    this._family = family;
	}

	get name(){
		return this._name;
	}

	set name(newName){
		this._name = newName;
	}

	get family(){
		return this._family;
	}

	set family(newFamily){
		this._family = newFamily;
	}

	getFull() {
		return this._name + " " + this._family;
	}	
};