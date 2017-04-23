"use strict";

var taskList;

$(function() {

    taskList = new TaskList();

    taskList.createTask("water plants");
    taskList.createTask("konmari my wardrobe");
    taskList.createTask("setup todo list");
    taskList.tasks[2].done = true;

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
        alert('please note that this click did not really save your task.');
    });
    
});
