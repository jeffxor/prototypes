describe("Consumer", function() {
	var consumer;

	beforeEach(function() {
		consumer = new Consumer("Jeffrey", "Williams");
	});

	it("has balance of 0 after constructor", function() {		
		expect(consumer.balance()).toBe(0);
	});

	it("has name set after constructor", function() {		
		expect(consumer.name).toBe("Jeffrey");
	});

	it("has family set after constructor", function() {		
		expect(consumer.family).toBe("Williams");
	});

	describe("full name", function() {
		it("is formated with name + family name", function() {
			expect(consumer.getFull()).toBe("Jeffrey Williams");
		});
	});

	describe("balance", function() {

		it("add in transaction increases balance by amount", function() {
			consumer.addTransaction({type: "in", amount: 10});

			expect(consumer.balance()).toBe(10);
		});

		it("add out transaction decreases balance by amount", function() {
			consumer.addTransaction({type: "out", amount: 10});

			expect(consumer.balance()).toBe(-10);
		});

	});

	describe("profile", function() {

		beforeEach(function() {
			consumer.addTransaction({type: "in", amount: 10});
		});

		it("displays full name and correct transaction balance", function() {
			expect(consumer.getProfile()).toBe("Jeffrey Williams, total balance: 10");
		});

	});
});