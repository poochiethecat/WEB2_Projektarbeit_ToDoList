"use strict";

var taskList;

var init = (taskList) => {
    $('#taskList').append(taskList.render());

    console.log('Application successfully initialized');


    $('#createTask').click(function(event) {
        event.preventDefault();
        var task = taskList.createTask('');
        $('#taskList ul').prepend(task.render());
    });

    $('#deleteAllDoneTasks').click(function(event) {
        event.preventDefault();
        taskList.cleanUp();
    });

    $('#saveTasks').click(function(event) {
        taskList.save();
    });
};

$(function() {


    var id = window.location.hash.substring(1);

    if(id != '') {
        console.log(id);
        TaskList.load(id,init);
    } else {
        taskList = new TaskList();
        taskList.createTask("");
        init(taskList);
    }



});
