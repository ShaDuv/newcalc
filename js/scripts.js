/* Basic Math Calculation */


/*Business Backend Logic*/

var add = function (num1, num2){
	return num1 + num2;
};

function addFunction(num1, num2){
  return num1 + num2;
}

/*This is the subtract function */
var subtract = function (num1, num2){
	return num1 - num2;
};

/*This is the multiply function */
var multiply = function (num1, num2){
	return num1 * num2;
};

/*This is the divide function */
var divide = function (num1, num2){
	return num1 / num2;
};

/*This is us returning an answer to the user*/
// var result = divide (num1, num2);

// Input
$(document).ready(function() {


  $("form#add").submit(function(event) {
  event.preventDefault();
  var num1 = parseInt($("#add1").val());
  var num2 = parseInt($("#add2").val());
  var result = add(num1, num2);
  console.log(result);
  $("#output").text(result);

  });


	$(".newbutton").click(function(){
		event.preventDefault();
		if($('.form-control option').val('1')){
		console.log("Selected coffee");
	} else if ($('.form-control option').val('2')) {
		console.log('selected tea');
	} else if ($('.form-control option').val('3')) {
		console.log('selected kombucha') ;
	} else {
		console.log('water') ;
		};
	});
			//var beverage = $('#beverage').val("2");
		//console.log(beverage);


var numbers = [1, 2, 3, 4];


function getSum(num1, num2) {
  return num1 + num2;
}

console.log(numbers.reduce(getSum));



});










// /* BMI Calculation */
// var bmi = function (weight, height ) {
//   return (703 * weight) / (height * height);
// };
//
// var weight = parseFloat(prompt("Enter your weight in pounds:"));
// var height = parseFloat(prompt ("Enter your height in inches:"));
//
// var result = bmi (weight, height).toFixed(1);
// alert ((result) + " This number actually means NOTHING");
//
// /*Converts Celsius to Fahrenheit*/
// var tempC = function (num1) {
//   return (num1 * 1.8) + 32;
// };
// var num1 = parseInt(prompt("Enter the temp in Celsius:"))
// var result = tempC (num1);
// alert ("That is " + (result) + " degrees Celsius.");
//
// /*Converts Fahrenheit to Celsius*/
// var tempF = function (num1) {
//   return (num1 - 32) * .5556;
// };
// var num1 = parseInt(prompt("Enter the temp in Fahrenheit:"));
// var result = tempF (num1);
// alert ("That is " + (result) + " degrees Fahrenheit.");
//
// /*Converts Gallons to Liters*/
// var gallon = function (num1) {
//   return num1 * 3.78541;
// };
//
// var num1 = parseFloat (prompt("Enter in the number of gallons:"));
// var result = gallon (num1);
// alert ((num1) + " gallons is " + (result) + " liters.");

// var str = 'twas the night before Xmas...';
// var newstr = str.replace (/xmas/i, 'Christmas');
// alert (newstr);
//
// var win = function (sentence) {
//   // return sentence.charAt(0).toUpperCase() + sentence.substr (1).slice(0);
//   return sentence + sentence.charAt(sentence.length-1).toUpperCase();
// }
// var = win {
//   var last = function (sentence) {
//     return sentence.charAt(sentence.length-1).toUpperCase();
//   }
//   var first = function (sentence) {
//     return sentence.charAt(0).toUpperCase();
//   }
//
// }
// alert (result);
