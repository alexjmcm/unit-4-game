// Global Variables

var random_result;
var lost;
var win;

// Setters
// Getters

$()

random_result= Math.floor(Math.random() * 102 + 18);
console.log(random_result);
$("#result").html('Random Result: ' + random_result);
for(var i = 0; i < 4; i++)
{
    var random = Math.floor(Math.random() * 11) + 1; 
    console.log(random);
    var crystal = $( "<div>");
        crystal.attr({
        "class": 'crystal',
        "data-random": random
        });
      
    $(".crystals").append(crystal);

}

$(".crystal").on('click', function () {
    console.log($(this).attr('data-random'));

});


// Pseudo Coding
// a game with 4 crystals and a Random Result (Between 18 and 120)
// Every crystal needs to have a random number between 1 - 12 
// That number should be generated every single time we win or lose
// to those 4 crystals
// When clicking any crystal, it should be adding with the previous result
// Until it equals the total score
// If it is not equal, then we start over
// If it is equal, then we increment a win counter

// Functions



// Testing
// console.log("Hello World")