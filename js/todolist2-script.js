$(document).ready(function() {
  // var allLists = [];
  // var currentList = -1;

  $("form#create-list").submit(function(event) {
  event.preventDefault();

  var listName = $("input#list-name").val();
  var list = { name: listName, tasks: [] };

  $("#lists ul").append("<li>" + list.name + "</li>");
  $("#lists").show();
  // allLists.push(list);
  // currentList = allLists.length-1;
  })

  $("form#create-task").submit(function(event) {
  event.preventDefault();

  var taskName = $("input#task-name").val();
  //var task = { name: listName, tasks: [] };

  $("#tasks ul").append("<li>" + taskName + "</li>");
  $("#tasks").show();
  // allLists[currentList].tasks.push(taskName);

  })


});
