$(document).ready(function(){
console.log("Jquery is loaded");

  $("button").click(function(event){
    event.preventDefault();
    console.log("The button was clicked");
    //THIS IS THE DATA ENTERING A VARIABLE
    var date = $("#disappointment").val();
    console.log(date);
  })






});
