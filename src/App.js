"use strict";

var taskList;

$(function() {

  // code placed here will be executed each time the page
  // is rendered

  // create a tasklist to display
  taskList = new TaskList();
  taskList.createTask("Setup todo list");
  taskList.createTask("Buy milk");
  taskList.createTask("Read recipe");
  taskList.createTask("Invite guests");
  taskList.tasks[0].done = true;

  console.log('Application successfully initialized');
  // add rendered markup ot the tasklist to the container #taskList
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
});
