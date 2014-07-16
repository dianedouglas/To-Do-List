$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var task = {};
    task.name = $("input#task-name").val();
    task.priority = $("select#task-priority").val();
    task.isDone = false;
    task.person = $("input#person").val();

    $("ul.todo-list").append("<li><input type='checkbox'><span class='task'> " + task.name + "</span></li>");
    var currentTask = $(".task").last();

    if(task.priority === "High"){
      currentTask.addClass("highPriority");
    }else if(task.priority === "Med") {
      currentTask.addClass("medPriority");
    }else if(task.priority === "Low") {
      currentTask.addClass("lowPriority");
    }

     var currentTaskCheckBox = $("input:checkbox").last().click(function(){
        if(!task.isDone){
          currentTask.addClass("done");
          task.isDone = true;
          alert("Yay! Task completed!");
        } else{
          currentTask.removeClass("done");
          task.isDone = false;
        }
     })

    $("#todo").show();

    currentTask.dblclick(function(){
      $(this).parent('li').remove();
      alert("Current Task: " + task.name + "\n" + "Assigned to: " + task.person);
    });

  });
});
