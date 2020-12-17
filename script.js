$(document).ready(function () {

    var currentHour = moment().hours();

    $(".description").each(function() {
    var selectedHour = $(this).data("hour");
    console.log(currentHour);
    console.log(selectedHour);
    
    if (currentHour > selectedHour   ){
    $(this).addClass( "past" );
        console.log(currentHour);

    }
        if (currentHour < selectedHour ){
        $(this).addClass( "future" );
        
    }

        if (currentHour === selectedHour){
        $(this).addClass( "present" );
    }
    
    });
    var todaysDate = moment().format('MMMM Do YYYY');
    $("#currentDay").html(todaysDate);
    
    $(".saveBtn").on("click", function() {
        var inputText = $(this).siblings(".description").val();
        var currentTime = $(this).parent().data("hour"); //can edit to .data (hour) and add a data-hour to 
        //text area for hours so we dont have to call id 
        localStorage.getItem(currentTime, inputText)

        });
//}
// display current day/date//
//
//console.log(todaysDate);
//

// var currentTime 

//show time and description//

   

    //function for displaying hours//
    


   //$.each(function(){

   //Get items

   $("#hour9 .description").val("hour9");
   console.log("hour9");
   $("#hour10 .description").val(localStorage.getItem("hour10"));
   $("#hour11 .description").val(localStorage.getItem("hour11"));
   $("#hour12 .description").val(localStorage.getItem("hour12"));
   $("#hour1 .description").val(localStorage.getItem("hour13"));
   $("#hour2 .description").val(localStorage.getItem("hour14"));
   $("#hour3 .description").val(localStorage.getItem("hour15"));
   $("#hour4 .description").val(localStorage.getItem("hour16"));
   $("#hour5 .description").val(localStorage.getItem("hour17"));
  
});
