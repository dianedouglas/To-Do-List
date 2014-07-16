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
    $("#details").show();

    currentTask.dblclick(function(){
      $(this).parent('li').remove();
      $('#details p').hide();
    });

    currentTask.click(function(){
      $('#details p').show();
      $('#details p.selectedTaskName').text("Current Task: " + task.name);
      $('#details p.selectedTaskPerson').text("Assigned to: " + task.person);
    });

  });
});
