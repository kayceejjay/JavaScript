var keyCount = 0;
var level = 0;
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];
//var randomChosenColor = nextSequence();


/*Utility Functions*/
//Play sound
function playSound(color) {
  var sounds = ["sounds/red.mp3","sounds/blue.mp3","sounds/green.mp3","sounds/yellow.mp3","sounds/wrong.mp3"];
  switch (color) {
    case "red":
      sound = sounds[0];
      break;
    case "blue":
      sound = sounds[1];
      break;
    case "green":
      sound = sounds[2];
      break;
    case "yellow":
      sound = sounds[3];
      break;
    default:
      sound = sound[4];
  }//switch
  var soundToPlay = new Audio(sound);
  soundToPlay.play();
}//playSound

//Flash button
function flashButton(color) {
  $(`#${color}`).on("click",function() {
    $(`#${color}`).fadeToggle(100).fadeToggle(100).fadeToggle(100).fadeToggle(100);
  });
}//flashButton

function animatepress(currentColor) {
  $(".btn").on("click",function() {
    $(".btn").add("class","pressed");
    setTimeout(function() { $(".btn").remove("class","pressed"); },100);
  });
}

function nextSequence() {
  //Generate color index as reference
  var randomNumber = Math.floor(Math.random() * 3);
  //Choose color using color index reference
  var randomChosenColor = buttonColors[randomNumber];
  //Add chosen color to game pattern array
  gamePattern.push(randomChosenColor);
  //PLay the associated sound for referenced color
  playSound(randomChosenColor);
  //Give Level in Title
  $("h1").text(`Level ${level}`);
  level++;
  return randomChosenColor;
};

function gameOver() {
  //play wrong
  playSound("black");
  //add game over
  $("body").add("class","game-over");
  //remove game over
  setTimeout(function() { $("body").remove("class","game-over"); },200);
}//gameOver


//Capture users responses
$(".btn").on("click",function() {
    var userChosenColor = $(".btn").attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    return userClickedPattern;
});


//Capture keypresses
function pressedButton() {
  var userChosenColor;
  //Get the id of button pressed
  $(".btn").on("keydown",function(event) {
      userChosenColor = $(".btn").attr("id");
      userClickPattern.push(userChosenColor);

  });
  //keyCount++;
}//pressButton


/*
if ( keyCount === 0 ) {
  nextSequence();
};
*/


var item = $(`#${randomChosenColor}`);

//flash button when user clicks


//play sound when user clicks
$(`#${randomChosenColor}`).on("click",function() {
   playSound(randomChosenColor);
});//playSound


//$(document).on("keydown",function(event) { console.log(event.key); $("h1").text("HexaCode Color"); });
