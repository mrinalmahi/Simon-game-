var buttonColours=["green","red","yellow","blue"];
var userPattern=[];
var level=0;
var start=false;
var gamePattern=[];
$(document).keypress(function(){
  if(!start){
    nextSequence();
    start=true;
  }



})
$(".btn").click(function(){
  var pressed=($(this).attr("id"));
  userPattern.push(pressed);
  animation(pressed);
  playsound(pressed);
  check(userPattern.length-1);
})




function nextSequence(){
  level++;
  userPattern=[];
  $("h1").text("Level"+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomColour=buttonColours[randomNumber];
  gamePattern.push(randomColour);
  $("#"+randomColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomColour);
}


function playsound(colour){
  var sound= new Audio("sounds/"+colour+".mp3");
  sound.play();
}
function animation(button){
  $("#"+button).addClass("pressed");
  setTimeout(function(){
    $("#"+button).removeClass("pressed");
  },100);

}
function check(pattern){


  if(userPattern[pattern]==gamePattern[pattern]){
    if(userPattern.length==gamePattern.length){
      console.log("success")
      setTimeout(function(){
        nextSequence()
      },1000);
    }
  }
  else{
    console.log("failed");
    gamePattern=[];
    level=0;
      $("body").addClass("game-over");
      $("h1").text("Game Over press any key to continue");

    setTimeout(function(){
      $("body").removeClass("game-over");

    },100);
    playsound("wrong");
    start=false;

  }
}
