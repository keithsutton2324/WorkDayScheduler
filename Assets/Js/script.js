$(".save").on("click",function(){
  var value=$(this).siblings("textarea").val()
  var time=$(this).attr("id").split("-")[0]
  console.log(value,time)
  localStorage.setItem(time,value)
})
for (var i=9; i<18; i++) {
  var data = localStorage.getItem(i)
  $(`#${i}-txt`).val(data)
}