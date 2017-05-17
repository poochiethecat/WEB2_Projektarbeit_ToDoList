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

TaskList.prototype.titleIsNotNew = function(title){
    var alreadyhere = false;
    $.each(this.tasks, function(index, task) {
        if (title == task.title) {
            alreadyhere = true;
        }
    });
    return alreadyhere;
};

TaskList.prototype.render = function() {
    var ulelement = $("<ul></ul>");
        if (this.size()>0) {
            $.each(this.tasks, function(index, task) {
                ulelement.append(task.render());
		});
	}
    return $(ulelement);
};

TaskList.prototype.removeTask = function (task) {
        if (this.tasks.indexOf(task) !== (-1)) {
            this.tasks = this.tasks.filter(function (t) {
                return t !== task;
            });

        } else {
            alert("This task doesnt exist in list.");
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
};

TaskList.prototype.toJSON = function () {
    var _hash = { id: this.id, title: this.title, tasks: [] };
    var _i;
    for (_i = 0; _i < this.tasks.length; _i += 1) {
        _hash.tasks.push({
            title: this.tasks[_i].title,
            done:  this.tasks[_i].done
        });
    }
    return JSON.stringify(_hash);
};

/*
 * persists the tasklist to the server.
 *
 * for tasklists without id (not yet persisted) the id
 * is written back to the model after it is received from
 * the server.
 */
TaskList.prototype.save = function () {
    var _that = this;
    var _url = 'http://zhaw.herokuapp.com/task_lists/';
    if (this.id) { _url += this.id; }
    $.post(_url, this.toJSON(), function(data) {
        _that.id = JSON.parse(data).id;
        window.location.hash = _that.id;
    });
};

/*
 * Loads the given tasklist from the server.
 *
 * @param {string} id - unique identifier of the tasklist to load
 * @param {function} callback - method to call after the tasklist
 *   was successfully loaded. receives fully populated tasklist
 *   object as first and only parameter.
 */
TaskList.load = function (id, callback) {
    var taskList = new TaskList();
    var url = 'http://zhaw.herokuapp.com/task_lists/' + id;
    $.getJSON(url, function (data) {
        taskList.id = data.id;
        $.each(data.tasks, function (index, task) {
            var t = taskList.createTask(task.title);
            t.done = task.done;
        });
        taskList.title = data.title;
        callback(taskList);
    });
};
