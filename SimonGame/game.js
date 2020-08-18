/*Global*/

var keyCount = 0;
var level = 0;
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];


/*Utility Functions*/

//Capture keypresses
function keyPressed() {
  var start = false;
  var returnObj = {};
  var numPressed = 0;

  //Get the id of button pressed
  $(document).on("keydown",function(event) {
    if (keyCount === 0) {
      start = true;
      return start;
    } else {
        var currLevel = level;
        var pressed = event.key;
    }//ifelse
      keyCount++;
      numPressed = keyCount;
      returnObj = { start, currLevel, pressed, numPressed };
  });

    return returnObj;
  //keyCount++;
}//pressButton

//Play sound
function playSound(colorName) {
  var sound;
  var sounds = ["sounds/red.mp3","sounds/blue.mp3","sounds/green.mp3","sounds/yellow.mp3","sounds/wrong.mp3"];

  switch (colorName) {
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
      sound = sounds[4];
  }//switch

  console.log(sound);
  var soundToPlay = new Audio(sound);
  soundToPlay.play();
}//playSound

//Flash button
function flashButton(colorName) {
  //Listen for click & flash button clicked
  $(`#${colorName}`).on("click",function() {
    $(`#${colorName}`).fadeToggle(100).fadeToggle(100).fadeToggle(100).fadeToggle(100);
  });
}//flashButton

//Animate clicked button
function animatePress(currentColor) {
  $(".btn").on("click",function() {
    console.log(this);
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
  //Flash the associated button for referenced color
  flashButton(randomChosenColor);
  //Play the associated sound for referenced color
  playSound(randomChosenColor);
  //Give Level in Title
  $("h1#level-title").text(`Level ${level}`);
  level++;
  console.log(gamePattern);
  return { level, gamePattern };
}//nextSequence


function checkAnswers(currentLevel) {
  if (userClickedPattern === gamePattern) {
    setTimeout(function() { nextSequence(); },100); userClickedPattern = [];
  } else { gameOver(); }
}//checkAnswers


function gameOver() {
  //play wrong.mp3
  playSound("black");
  //add game over
  $("body").add("class","game-over");
  //remove game over
  setTimeout(function() { $("body").remove("class","game-over"); },200);
  level = 0;
  keyCount = 0;
  return { level, keyCount };
}//gameOver

//Capture users responses
function userResponses() {
  $(".btn").on("click",function() {
      //store the id of button clicked
      var userChosenColor = $(".btn").attr("id");
      //play button sound
      playSound(userChosenColor);
      //compose user pattern
      userClickedPattern.push(userChosenColor);
      console.log(userClickedPattern);
      return { color: userChosenColor, pattern: userClickedPattern };
  });//capturedClicks
}//userResponses


function playSimon() {

  var gameOn = keyPressed();
  var compuSeq;
  var userSeq;
  /*gameOn != false*/
  if ( keyCount === 0 ) {
    compuSeq = nextSequence();
    var whatLevel = compuSeq.level;
  };
  userSeq = userResponses();
  checkAnswers(whatLevel);
  console.log(gameOn);

}//playSimon


playSimon();

/*
var gameStat = keyPressed();
var stat = gameStat.level;
console.log(stat);
*/
