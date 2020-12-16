// display current day/date//
var todaysDate = moment().format('MMMM Do YYYY');
$("#currentDay").text(todaysDate);
console.log(todaysDate);
//$((".description").each(function() {

// var currentTime = $(this). data("hour");
// }))

//show time and description//
$(document).ready(function () {
    $(".saveBtn").on("click", function() {

    var inputText = $(this).siblings(".description").val();
    var currentTime = $(this).parent().attr("id"); //can edit to .data (hour) and add a data-hour to 
    //text area for hours so we dont have to call id 
    console.log(time);

        localStorage.setItem(currentTime, inputText)


    });

    //function for displaying hours//
    


   //$.each(function(){

    


});
