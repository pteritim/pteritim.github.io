document.getElementById("submitbtn").addEventListener("click",linker);

var anchor = document.getElementById("anchor");

function linker (){
  var inputText = document.getElementById("inputbox");
  if (inputText.value === "For Kate"){
    anchor.href = "act2scene1.html"
  }
}

// document.getElementById("reflectbtn").addEventListener("click",unhide);
//
//
// function unhide (){
//   document.getElementById("clue").style.visibility = "visible";
// }


document.getElementById("sound").addEventListener("click",play);

function play(){
  document.getElementById("audio").play();
}
