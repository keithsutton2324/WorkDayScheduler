$(".save").on("click", function () {
  var value = $(this).siblings("textarea").val()
  var time = $(this).attr("id").split("-")[0]
  console.log(value, time)
  localStorage.setItem(time, value)
})
var currentTime = moment()
$("#currentDay").val(currentTime)
var currentDate = currentTime._d
console.log(currentDate)
var time = moment().hours()
console.log(time)
for (var i = 9; i < 18; i++) {
  var data = localStorage.getItem(i)
  $(`#${i}-txt`).val(data)
  console.log(i,time)
  if (i < time) {
    $(`#${i}-txt`).addClass("past")
    // s$(`#${i}-txt`).addClass("bg-danger")
  } else if (i == time) {
    $(`#${i}-txt`).addClass("present")
  } else {
    $(`#${i}-txt`).addClass("future")
  }
}