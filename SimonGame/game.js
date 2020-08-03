var keyCount = 0;
var level = 0;
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];
//var randomChosenColor = nextSequence();


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


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  playSound(randomChosenColor);
  $("h1").text(`Level ${level}`);
  level++;
  return randomChosenColor;
};


function animatepress(currentColor) {
  $(".btn").on("click",function() {
    $(".btn").add("class","pressed");
    setTimeout(function() { $(".btn").remove("class","pressed"); },100);
  });
}



$(".btn").on("click",function() {
    var userChosenColor = $(".btn").attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    return userClickedPattern;
});


$(document).on("keydown",function(event) {
    if ( keyCount === 0 ) {
      nextSequence();
    };
    keyCount++;
});



var item = $(`#${randomChosenColor}`);

//flash button when user clicks
$(`#${randomChosenColor}`).on("click",function() {
  $(`#${randomChosenColor}`).fadeToggle(100).fadeToggle(100).fadeToggle(100).fadeToggle(100);
});//flash

//play sound when user clicks
$(`#${randomChosenColor}`).on("click",function() {
   playSound(randomChosenColor);
});//playSound



/*
//play sound on mouse click
item.on("click", function() {var buttonInnerHTML = this.innerHTML; eventMonitor(buttonInnerHTML);
});

//monitor the document & play sound on key entry
  document.on("keydown", function(event) {
  return eventMonitor(event.key);
});

/*

function eventTrigger(bindItem,trigger,monitorEvent,TriggerResponse) {
  var monitor = bindItem.on("monitorEvent",fubction() {
    bindItem.TriggerRespone(trigger)
;});


var trigger = randomChosenColor;
var item = $(`#${randomChosenColor}`);

function TriggerResponse(trigger,item) {
  this.flashSelected = item.on("click",function() {item.fadeToggle(100).fadeToggle(100).fadeToggle(100).fadeToggle(100);});
  this.getSound = item.on("click") playSound(trigger);
}

new ActionTriggered(trigger,item);
  action.flashSelected();
  action.getSound();

}
*/
