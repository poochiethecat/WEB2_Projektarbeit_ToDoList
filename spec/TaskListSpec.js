describe("addTask", function() {

	var tasklist;

	beforeEach(function() {
		tasklist = new TaskList("Samplelist");
		testtask = new Task("Testtask");
	});

	it("tasklist should contain testtask after adding testtask to tasklist", function() {
		tasklist.addTask(testtask);
		expect(tasklist.taskarray).toContain(testtask);
	});
});
