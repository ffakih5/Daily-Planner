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


   //$("#hour9 .description").val();
   console.log("hour9");
   (localStorage.getItem("textInput"));
   console.log("textInput");
   //$("#hour11 .description").val(localStorage.getItem("currentTime"));
   //$("#hour12 .description").val(localStorage.getItem("currentTime"));
  // $("#hour12 .description").val(localStorage.getItem("currentTime"));
  // $("#hour1 .description").val(localStorage.getItem("currentTime"));
   //$("#hour2 .description").val(localStorage.getItem("currentTime"));
   //$("#hour3 .description").val(localStorage.getItem("currentTime"));
  // $("#hour4 .description").val(localStorage.getItem("currentTime"));
   //$("#hour5 .description").val(localStorage.getItem("currentTime"));
  
});
