$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var task = {};
    task.name = $("input#task-name").val();
    task.priority = $("select#task-priority").val();
    task.isDone = false;

    $("ul.todo-list").append("<li><span class='task'>" + task.name + "</span></li>");
    $("#todo").show();
    $(".task").last().click(function(){
      alert(task.name + task.priority + task.isDone);
    })

  });
});
