var TaskList = function(title) {
	this.title = title;
	this.taskarray = [];

	this.addTask = function(task) {
		this.taskarray.push(task);
	}

	this.removeTask = function(task) {
		this.taskarray = this.taskarray.filter(function(t) {t!=task});
	}
}

