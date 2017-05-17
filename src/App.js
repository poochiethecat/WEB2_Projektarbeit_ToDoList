"use strict";

var taskList;

$(function() {

    taskList = new TaskList();

    taskList.createTask("");

    console.log('Application successfully initialized');
        
    $('#taskList').append(taskList.render());

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
    
});
