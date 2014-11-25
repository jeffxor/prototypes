class Consumer extends Person(name, family) {

    constructor(name, family){
        super(name, family);
    }

	var records = [{type: "in", amount: 0}];

    addTransaction (trans) {
	    if(trans.hasOwnProperty("type") && trans.hasOwnProperty("amount")) {
    	   records.push(trans);
        }
    }

	balancee () {
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

    getProfile () {
         return this.getFull() + ", total balance: " + this.balance();
    };
};



