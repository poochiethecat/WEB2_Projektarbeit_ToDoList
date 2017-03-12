var TaskList = function(title) {
	this.title = title;
	this.taskarray = [];

	this.addTask = function(task) {
		if(this.taskarray.indexOf(task)==(-1)){
			this.taskarray.push(task);
		}
		else {
			throw new Error("This task already exists.");
		}
	}

	this.removeTask = function(task) {
		if(this.taskarray.indexOf(task)==(-1)){
			throw new Error("This task doesnt exist in list.");
		}
		else {
			this.taskarray = this.taskarray.filter(function(t) {t!=task});
		}
	}
}

