var TaskList = function (title) {
    "use strict";
    this.title = title;
    this.taskarray = [];

    this.addTask = function (task) {
        if (this.taskarray.indexOf(task) === (-1)) {
            this.taskarray.push(task);
        } else {
            throw new Error("This task already exists.");
        }
    };

    this.removeTask = function (task) {
        if (this.taskarray.indexOf(task) !== (-1)) {
            this.taskarray = this.taskarray.filter(function (t) {
                return t !== task;
            });

        } else {
            throw new Error("This task doesnt exist in list.");
        }
    };
};