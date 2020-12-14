// display current day/date//
var currentDate = moment().format('2020-12-14', 'YYYY-MM-DD');
$("#currentDay").text("currentDate");

//show time and description 
$(document).ready(function () {
    $(".saveBtn").on("click", function() {
        var time = $(this).attr("#hour");
        var text = $(this).attr(".description").val();
        
    });



});
