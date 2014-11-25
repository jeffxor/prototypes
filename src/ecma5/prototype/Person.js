function Person(name, family){
    	this.name = name;
	    this.family = family;
};

Person.prototype.getFull = function() {
    return this.name + " " + this.family;
};
