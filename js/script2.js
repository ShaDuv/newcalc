$(document).ready(function() {


	$(".newbutton").click(function(event){
    var favoriteColor = $("#color").val();
    var dob = $("#born").val();
    var beverage = $("#beverage").val();

      $(".beverage").text(beverage);
      $(".born").text(dob);
      $(".color").text(favoriteColor);
      $(".color").css({backgroundColor: favoriteColor});

      $("#story").show();
  	event.preventDefault();



  });





	});
