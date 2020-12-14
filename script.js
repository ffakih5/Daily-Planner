// display current day/date//
var todaysDate = moment().format('2020-12-14', 'YYYY-MM-DD');
$("#currentDay").text("todaysDate");

//show time and description 
$(document).ready(function () {
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log("time");
    });



});
