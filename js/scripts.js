$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var task = {};
    task.name = $("input#task-name").val();
    task.priority = $("select#task-priority").val();
    task.isDone = false;

  });
});
