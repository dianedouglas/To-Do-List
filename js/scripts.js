$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var task = {};
    task.name = $("input#task-name").val();
    task.priority = $("select#task-priority").val();
    task.isDone = false;

    $("ul.todo-list").append("<li><input type='checkbox'><span class='task'> " + task.name + "</span></li>");
    var currentTask = $(".task").last();

    if(task.priority === "High"){
      currentTask.addClass("highPriority");
    }else if(task.priority === "Med") {
      currentTask.addClass("medPriority");
    }else if(task.priority === "Low") {
      currentTask.addClass("lowPriority");
    }

    $("#todo").show();
    currentTask.click(function(){
      // alert(task.name + task.priority + task.isDone);

    })

  });
});
