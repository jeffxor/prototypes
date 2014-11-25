	function Consumer(name, family) {
        Person.call(this, name, family);
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

    Consumer.prototype = new Person(); 

	Consumer.prototype.getProfile = function() {
    	 return this.getFull() + ", total balance: " + this.balance();
	};