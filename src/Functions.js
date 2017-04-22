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
  taskList.render().appendTo('#taskList');

});


var listTitle =  $("#newtasklist").val();
$("#addnewtasklist").on("click", TaskList(listTitle));