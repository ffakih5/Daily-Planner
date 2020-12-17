$(document).ready(function () {
    $(".saveBtn").on("click", function() {
        var inputText = $(this).siblings(".description").val();
        var currentTime = $(this).siblings(".description").data("hour"); 
        localStorage.setItem(currentTime, inputText)
        console.log(currentTime);
        console.log(inputText);

        });

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


   $("#hour9 .description").val(localStorage.getItem("9"));
   console.log("hour9");
   $("#hour10 .description").val(localStorage.getItem("10"));
   console.log("hour10");
   $("#hour11 .description").val(localStorage.getItem("11"));
   $("#hour12 .description").val(localStorage.getItem("12"));
   $("#hour13 .description").val(localStorage.getItem("13"));
   $("#hour14 .description").val(localStorage.getItem("14"));
   $("#hour15 .description").val(localStorage.getItem("15"));
   $("#hour16 .description").val(localStorage.getItem("16"));
   $("#hour17 .description").val(localStorage.getItem("17"));

});
