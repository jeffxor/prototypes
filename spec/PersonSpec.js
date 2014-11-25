describe("Person", function() {
	var person;

	beforeEach(function() {
		person = new Person("Jeffrey", "Williams");
	});

	it("has name set after constructor", function() {		
		expect(person.name).toBe("Jeffrey");
	});

	it("has famile set after constructor", function() {		
		expect(person.family).toBe("Williams");
	});

	describe("full name", function() {
		it("is formated with name + family name", function() {
			expect(person.getFull()).toBe("Jeffrey Williams");
		});
	});
});