var TaskList = function(title) {
	this.title = title;
	this.taskarray = [];

	this.addTask = function(task) {
		this.taskarray.push(task);
	}
}

