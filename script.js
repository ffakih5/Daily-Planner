$(document).ready(function () {

     $(".saveBtn").on("click", function() {
        var inputText = $(this).siblings(".description").val();
        var currentTime = $(this).parent().data("hour"); //can edit to .data (hour) and add a data-hour to 
        //text area for hours so we dont have to call id 
        console.log(time);
    
        localStorage.setItem(currentTime, inputText)

        });
    
    var currentHour = moment().hours();

    $(".description").each(function() {
    var selectedHour = $(this).data("hour");
    console.log(currentHour);
    console.log(selectedHour);
    
    if (selectedHour < currentHour ){
    $(this).addClass( "past" );
        console.log(currentHour);

    }
        if (selectedHour > currentHour){
        $(this).addClass( "future" );
        
    }

        if (selectedHour === currentHour){
        $(this).addClass( "present" );
    }
    

    });
    var todaysDate = moment().format('MMMM Do YYYY');
    $("#currentDay").html(todaysDate);

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

   $("#hour9 .description").val(localStorage.getItem("hour9"));
   $("#hour10 .description").val(localStorage.getItem("hour10"));
   $("#hour11 .description").val(localStorage.getItem("hour11"));
   $("#hour12 .description").val(localStorage.getItem("hour12"));
   $("#hour1 .description").val(localStorage.getItem("hour1"));
   $("#hour2 .description").val(localStorage.getItem("hour2"));
   $("#hour3 .description").val(localStorage.getItem("hour3"));
   $("#hour4 .description").val(localStorage.getItem("hour4"));
   $("#hour5 .description").val(localStorage.getItem("hour5"));
  

    


});
