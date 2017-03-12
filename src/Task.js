var Task = function(title){
	this.title = title;
	this.done = false;

	this.setDone = function() {
		this.done = true;
	}

	this.setUndone = function() {
		this.done = false;
	}
}

