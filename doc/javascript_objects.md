##Javascript Objects

###Simple Data Types
* String
* Number
* Boolean
* Undefined
* Null

####String
* Single or Double quotes
* Backslah is the escape character
* There is no character type
* Unicode 16 character set (16 bits wide)
* String's have length and functions

Examples

	var name = 'jeff\'s';
	var name = "jeff's";
	var name = "jeff\u0027s	"
	'j'+'e'+'f'+'f'+'\''+'s' === 'jeff\'s';
	name.length == 5;
	name.toUpperCase();

####Number
* Single number type
* Internally represented as 64-bit floating point
* Supports exponents 1e2
* **NaN** operation that can't produce a normal result
* **NaN** is not equal to any value, not even itself


Examples
	
	1 == 1.0
	100 == 1e2
	isNaN(1/0)
	NaN !== NaN
	var x = 0xFF;

####Undefined
* variable without a value is undefined

Example
	
	var name;
	alert(name); //shows undefined
	alert(typeof name); //shows undefined
	
####Null
* Assigned to variable as a representation of no value

Example

	var name = null;
	alert(name); //shows null
	alert(typeof name); //shows object
	
###Objects (Complex Data Type)
####What are Javascript Objects
* Unordered list of primitive and reference data types
* Stored as a series of name-value pairs

Example

	var myFirstObject = {firstName: "Richard", favoriteAuthor: "Conrad"};
	
* Property names can be a string or a number
* Number must be accessed using bracket notation

Example

	var ageGroup = {30: "Children", 100:"Very Old"};
	console.log(ageGroup.30) // This will throw an error​
	​// This is how you will access the value of the property 30, to get value "Children"​
	console.log(ageGroup["30"]); // Children​
	
####Reference Data Type and Primitive Data Types
Primtive data type is stored directly on the variable

	// The primitive data type String is stored as a value​
	​var consumer = "Kobe";  
	​var anotherConsumer = consumer; // anotherPerson = the value of person​
	consumer = "Bryant"; // value of person changed​
	console.log(anotherConsumer); // Kobe​
	console.log(person); // Bryant

Reference data type’s value is stored as a reference

	var consumer = {name: "Kobe"};
	​var anotherConsumer = consumer;
	consumer = "Bryant";
	console.log(anotherConsumer.name); // Bryant​
	console.log(consumer.name); // Bryant
	
###Creating Objects
######Object Literals

	// This is an empty object initialized using the object literal notation​
	​var myCars = {};

	​// This is an object with 4 items, again using object literal​
	​var car = {
		color: "yellow",
		style: "sedan",
		topSpeed: 8,
		
		​howFastAmI: function () {
			console.log("Vroom Vroom Fast");
		}
	}
	
#####Object Constructor
* Constructor is a function used for initializing new objects
* You use the new keyword to call the constructor
* More on this later

Example

	var car =  new Object ();
	car = "yellow";
	car.shape= "sedan";
	mango.topSpeed = 8;

	mango.howFastAmI = function () {
		console.log("Vroom Vroom Fast");				
	}
	
####Prototype Pattern
Example

	function Car () {
	}

	Car.prototype.color = "Yellow";
	Car.prototype.sweetness = 7;
	Car.prototype.modelName = "Generic Fruit";
	Car.prototype.countryOfManufacture = "USA";

	Car.prototype.showModelName = function () {
		console.log("This is a " + this.modelName);
	}

	Car.prototype.showCuntryOfManufacture = function () {
		console.log("Manufactured in:" + this.countryOfManufacture);
	}
	
###Prototypical Inheritance
Prototype-based programming is where behaviour reuse is performed via a process of cloning existing objects that serve as prototypes.

"We don't need classes to make lots of similar objects....Objects inherit from objects. What could be more object oriented than that?" --  Douglas Crockford

####Prototype Property
Every JavaScript function has a prototype property (this property is empty by default).
You attach properties and methods on this prototype property when you want to implement inheritance.
__proto__ “pseudo” property (an alternative syntax) that allows you to access an object’s prototype property.

####Prototype Attribute
An object’s prototype attribute points to the object’s “parent”
It is set automatically when you create a new object
Every object inherits properties from some other object

#####Constructor
All objects that inherit from another object also inherit a constructor property


	function Car () {
	}

	​var userCar = new Car (); 
	​var myObj = new Object ();

	console.log(myObj.constructor); // Object()​
	console.log(userCar.constructor); // Account()

#####Object.prototype
Object.prototype itself does not inherit any methods or properties from any other object.
Object.prototype is the prototype attribute od object literals or constructed with new Object().


#####Objects Created With a Constructor Function
Objects created with the new keyword get their prototype from the constructor function.

	function Car () {
	};
	​var userCar = new Car ();
	//prototype attribute (or prototype object) is Car.prototype.

This is the principal manner in which inheritance is implemented in JavaScript and the integral role the prototype chain has in the process.

#####Prototype Attribute: Accessing Properties on Objects
Prototype is also important for accessing properties and methods of objects.
Accessing a property of an object
* search for the property begins directly on the object
* if not found, it then looks for the property on the object’s prototype
* this continues until there is no more prototype 

If the property does not exist on any of the object’s prototype it returned as undefined
This in essence is the prototype chain (inheritance) in Javascript


###Constructor Vs Prototype Methods

	function Car() {
		this.color = "red";
		this.speed = 0;
		this.accelerate = function (){
			this.speed += 1;
		}
	}

	Car.prototype.accelerate = function (){
			this.speed += 1;	
	};

#####Constructor	
When you bind a method to the this keyword you are providing that method to only that particular instance  
This is much like a traditional static method
Any method attached via this will get re-declared for every new instance we create
Fast method invocation as method defined on instance.
Access to local / non public variables

#####Prototype
Prototype will enable us to easily define methods to all instances
Objects coming from the same constructor point to one common prototype object.
As all instances point at the same method it is loaded only once.
Prototype approach is obviously faster in execution when creating new object instances
Decrease in the speed of invoking a method in comparison to the first approach
Access to only public variables

#####Hybrid Approach 

	function Consumer(name, family) {
    	this.name = name;
	    this.family = family;
    
    	var records = [{type: "in", amount: 0}];

	    this.addTransaction = function(trans) {
    	    if(trans.hasOwnProperty("type") && trans.hasOwnProperty("amount")) {
        	   records.push(trans);
	        }
	    }

    	this.balance = function() {
       	var total = 0;

       		records.forEach(function(record) {
           		if(record.type === "in") {
	             total += record.amount;
    	       }
        	   else {
            	 total -= record.amount;
	           }
    	   });
    	
        	return total;
	    };
	};

	Consumer.prototype.getFull = function() {
    	return this.name + " " + this.family;
	};

	Consumer.prototype.getProfile = function() {
    	 return this.getFull() + ", total balance: " + this.balance();
	};

###Resources
[JavaScript: The Good Parts](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742)  
[Prototype In Plain Language](http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)  
[Methods Constructor Vs. Prootype](http://thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/)  
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

	
	
	





	

	
