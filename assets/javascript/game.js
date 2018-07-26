// Global Variables

var random_result;
var lost = 0;
var win = 0;
var previous = 0;

// Setters
// Getters

$()

var resetAndStart = function () {
    $(".crystals").empty();

    var images = [ 
        'https://www.gia.edu/images/Brazilian-gemstones-188842-636x358.jpg',
        'http://www.thebrazilianconnection.com/gemimages/37088.JPG',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3F-IF8YFGmQY3mZEQ5eE6HzRG4aPPoNij6fDhvlX_gNBqPcxTJw',
        'http://www.kingstonegems.com/wp-content/uploads/brazilian-alexandrite-round-king-stone-gems-160492h.jpg']

    //  var images = [ 
    //     '../../assets/images/alexandrite.jpg"'
    //     'http://www.thebrazilianconnection.com/gemimages/37088.JPG',
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3F-IF8YFGmQY3mZEQ5eE6HzRG4aPPoNij6fDhvlX_gNBqPcxTJw',
    //     'http://www.kingstonegems.com/wp-content/uploads/brazilian-alexandrite-round-king-stone-gems-160492h.jpg']    

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
            crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size":"cover"          
            });
      
    $(".crystals").append(crystal);

}
 $("#previous").html("Total Score:" + previous);
}



resetAndStart();

// var reset = function () {
    
// }



$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score:" + previous);

    if(previous > random_result) {
        console.log("You Lost!!");
        lost++;
        $("#lost").html("You Lost:" + lost);
        previous = 0
       
        resetAndStart();

    }
    else if(previous === random_result){
        console.log("You Win");
        win++;

        $("#win").html("You Win:" + win);
      
        previous = 0
        resetAndStart();
    }

    console.log(previous);

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