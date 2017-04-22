"use strict";

function TaskList(title) {
    this.id = null;
    this.tasks = [];
    this.title = title || "";
}

TaskList.prototype.size = function() {
    return this.tasks.length;
};

TaskList.prototype.createTask = function(title) {
    var _task = new Task(title);
    this.tasks.push(_task);
    return _task;
};

TaskList.prototype.render = function() {
    var ulelement = $("<ul></ul>")
        if (this.size()>0){
            $.each(this.tasks, function(index, task) {
                ulelement.append(task.render());
		});
	}
  return $(ulelement);
}

TaskList.prototype.removeTask = function (task) {
        if (this.tasks.indexOf(task) !== (-1)) {
            this.tasks = this.tasks.filter(function (t) {
                return t !== task;
            });

        } else {
            throw new Error("This task doesnt exist in list.");
        }
};

TaskList.prototype.cleanUp = function() {
    var thatlist=this;
    $.each(this.tasks, function(index, task) {
        if (this.done) {
        thatlist.removeTask(this);
        }
    });
    $("#taskList").empty().append(thatlist.render());

}

