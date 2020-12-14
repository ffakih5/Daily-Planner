// display current day/date//
var todaysDate = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(todaysDate);
console.log(todaysDate);

//show time and description//
$(document).ready(function () {
    $(".saveBtn").on("click", function() {

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(time);

        localStorage.setItem(time, text)
    });

    //function for displaying hours//

   // $.each(function(){

    


});
