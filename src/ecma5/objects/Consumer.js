function Consumer(name, family) {
    this.name = name;
    this.family = family;
	var records = [{type: "in", amount: 0}];

    this.getFull = function() {
        return this.name + " " + this.family;
    };

    this.getProfile = function() {
         return this.getFull() + ", total balance: " + this.balance();
    };        

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
