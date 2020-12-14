// display current day/date//
var todaysDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(todaysDate);

//show time and description 
$(document).ready(function () {
    $(".saveBtn").on("click", function() {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log("time");

        localStorage.setItem(time, text)
    });
    for (var i = 0; i < drinkList.length; i++) {



});
