var Task = function (title) {
    "use strict";
    this.title = title;
    this.done = false;

    this.setDone = function () {
        this.done = true;
    };

    this.setUndone = function () {
        this.done = false;
    };
};

