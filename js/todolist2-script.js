$(document).ready(function() {
  var currentList;
  var allLists = [];

  $("form#create-list").submit(function(event) {
    event.preventDefault();

    var listName = $("input#list-name").val();
    var list = { name: listName, tasks: [] };

    $("#lists ul").append("<li><span>" + list.name + "</span></li>");
    $("#lists").show();

    currentList = list;
    allLists.push(list);
    //set the list display on the right here.

    $("input#list-name").val("");

      $("#tasks ul").empty();

    $("#lists ul li").last().click(function(){
      $("#tasks ul").empty();
      // var currentListItem = $(this);
      var index = $("#lists ul li").index($(this));
      currentList = allLists[index];
      currentList.tasks.forEach(function(task){
        $("#tasks ul").append("<li>" + task + "</li>");
      })
    })
  })

  $("form#create-task").submit(function(event) {
    event.preventDefault();

    var taskName = $("input#task-name").val();
    //var task = { name: listName, tasks: [] };

    $("#tasks ul").append("<li>" + taskName + "</li>");
    $("#tasks").show();

    currentList.tasks.push(taskName);
    $("input#task-name").val("");
  })


});
