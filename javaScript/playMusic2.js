
var songs =
[
  "music/PinkFloydWelcomeToTheMachine.mp3",
  "music/WhenTheLeveeBreaks.mp3",
  "music/ToolThePot.mp3",
  "music/LinkinParkLeaveOutAllTheRest.mp3",
  "music/LinkinParkBreakingTheHabit.mp3",
  "music/IncubusIncubusMexico.mp3",
  "music/Immigrant Song.mp3",
  "music/AudioslaveOriginalFire.mp3",
  "music/AliceInChainsNoExcuses.mp3",
  "music/AliceInChainsGrind.mp3"
];

var on;

function randomNum()
{
    var num =(Math.floor(Math.random() * 10));
    return num;
};

var audio = new Audio(songs[randomNum()]);

function whenOn()
{
  audio.play();
};

function whenOf()
{
  audio.pause();
  audio.src = songs[randomNum()];

};

document.getElementById('playButton').onclick = (
function()
{
  if (!on)
  {
    on=true;
    whenOn();
  }
  else
  {
    on=false;
    whenOf();
  }
});
