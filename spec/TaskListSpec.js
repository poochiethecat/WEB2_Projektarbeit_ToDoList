describe("addTask", function() {

	var tasklist;

	beforeEach(function() {
		tasklist = new TaskList("Samplelist");
		testtask = new Task("Testtask");
		tasklist.addTask(testtask);
	});

	it("should contain testaddtask after adding testaddtask", function() {
		testaddtask = new Task("Testaddtask");
		tasklist.addTask(testaddtask);
		expect(tasklist.taskarray).toContain(testaddtask);
	});

	it("should not contain testtask after removing testtask", function() {
		tasklist.removeTask(testtask);
		expect(tasklist.taskarray).not.toContain(testtask);
	});
});
