// variable for the current day
var currentDay = document.querySelector("#currentDay");

// Add current day with moment.js to <p class="currentDay">
$(currentDay).text(moment().format('LLLL'));

function hourUpdater() {
  var currentHour = moment().hours();
  $(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id").split("-")[1])
    if (blockHour < currentHour) {
      $(this).addClass("past")
    }
    else if (blockHour === currentHour) {
      $(this).removeClass("past")
      $(this).addClass("present")
    }
    else {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")
    }
  })
}
hourUpdater();

$(".saveBtn").on("click", function() {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value);
});

for (var i = 9; i < 18; i++) {
  var className = "#hour-"+i+" .description";
  var time = "hour-" + i
  $(className).val(localStorage.getItem(time));
};
