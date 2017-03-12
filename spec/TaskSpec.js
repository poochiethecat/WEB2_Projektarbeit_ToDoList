describe("Task", function() {

	var testtask;

	beforeEach(function() {
		testtask = new Task("Testtask");
	});

	it("should set the property done to true if it is done", function() {
		testtask.setDone();
		expect(testtask.done).toEqual(true);
	});

	it("should set the property done to false if it is set to undone", function() {
		testtask.setUndone();
		expect(testtask.done).toEqual(false);
	});	

	describe("when creating new task", function() {
		emptytask = new Task("EmptyTask");
		it("should be 'not done' by default", function() {
			expect(emptytask.done).toBeFalsy();
		});
	});

	
	
});