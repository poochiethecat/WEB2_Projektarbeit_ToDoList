describe("TaskList", function() {

	var tasklist;

	beforeEach(function() {

	});

	describe("when adding testtask", function() {
		testtask = new Task("Testtask");
		tasklist = new TaskList("Samplelist");
		tasklist.addTask(testtask);

		it("should contain testaddtask after adding testaddtask", function() {
			expect(tasklist.taskarray).toContain(testtask);
		});

		it("should not be allowed to add the same task twice to tasklist", function() {
			expect(function() {
        		tasklist.addTask(testtask);
        	}).toThrowError("This task already exists.");
		});

	});

	describe("when removing testtask", function() {
		test2task = new Task("TestRemove");
		tasklist2 = new TaskList("Samplelist2");
		tasklist2.addTask(test2task);

		it("should not contain testtask after removing testtask", function() {
			tasklist2.removeTask(test2task);
			expect(tasklist2.taskarray).not.toContain(test2task);
		});

		it("should not allow to remove a song that is not in the tasklist", function() {
			test3task = new Task("TestRemoveNotExisting");
			expect(function() {
				tasklist2.removeTask(test3task);
			}).toThrowError("This task doesnt exist in list.");
		});

	});
	
	describe("when creating new tasklist", function() {
		emptytasklist = new TaskList("EmptyList");

		it("should be empty by default", function() {
			expect(emptytasklist.taskarray).toEqual([]);
		});	
	});
	
});
