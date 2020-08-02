var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];

function playSound(color) {
  var sounds = ["red.mp3","blue.mp3","green.mp3","yellow.mp3","wrong.mp3"];
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
  soundToPlay();
}//playSound


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  return randomChosenColor;
};

nextSequence();

var item = $(`#${randomChosenColor}`);

item.on("click",function() {
  item.fadeToggle(100).fadeToggle(100).fadeToggle(100).fadeToggle(100);
});//flash

item.on("click",function() {
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
