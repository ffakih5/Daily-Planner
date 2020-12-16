$(document).ready(function () {
    var todaysDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(todaysDate);
        var thisHour = moment().hours();

    $(".description").each(function() {
    var selectedHour = $(this). data("hour");
    console.log(thisHour);
    console.log(selectedHour);
    if(thisHour > selectedHour){


    }
         })




// display current day/date//
//
//console.log(todaysDate);
//

// var currentTime 

//show time and description//

    $(".saveBtn").on("click", function() {

    var inputText = $(this).siblings(".description").val();
    var currentTime = $(this).parent().data("hour"); //can edit to .data (hour) and add a data-hour to 
    //text area for hours so we dont have to call id 
    console.log(time);

        localStorage.setItem(currentTime, inputText)


    });

    //function for displaying hours//
    


   //$.each(function(){

   //Get items

   $("#hour9 .description").val(localStorage.getItem("hour9"));

    


});
