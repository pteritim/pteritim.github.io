document.getElementById("submitbtn").addEventListener("click",linker);

var anchor = document.getElementById("anchortag");

function linker (){
  var inputTime = document.getElementById("inputbox").value;
  if (inputTime === "03:00"){
    anchor.href = "act1scene1.html"
  }
}


document.getElementById("sound").addEventListener("click",play);

function play(){
  document.getElementById("audio").play();
  document.getElementById("airplane").style.WebkitAnimationPlayState = "running";
}
