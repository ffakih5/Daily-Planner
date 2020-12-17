$(document).ready(function () {
    $(".saveBtn").on("click", function() {
        var inputText = $(this).siblings(".description").val();
        var currentHour = $(this).parent().data("hour"); 
        localStorage.setItem(currentHour, inputText)
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
    
   $("#hour9 .description").val();
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
