describe("Car", function() {
	var car;

	beforeEach(function() {
		car = new Car();
	});

	it("is red at the beginning", function() {
		console.log(car);
		expect(car.color).toBe("red");
	});

	it("should not be moving", function() {
		expect(car.speed).toBe(0);
	});

	describe("accelerate", function() {
		it("increase speed by one", function() {
			car.accelerate();
			expect(car.speed).toBe(1);
		});
	});
});