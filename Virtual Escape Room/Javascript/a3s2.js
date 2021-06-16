document.getElementById("revealbtn").addEventListener("click",reveal);

function reveal(){
    document.getElementById("malletbtn").style.visibility = "visible";
    document.getElementById("revealbtn").style.visibility = "hidden";
}



document.getElementById("malletbtn").addEventListener("click",random);

var count = 0;

function random (){
  var num = Math.floor((Math.random() * 10) + 1);

  if (count === 0 && num%2 === 0){
    document.getElementById("anchor").style.visibility = "visible";
    count++;
  }

  else{
    document.getElementById("failmessage").style.visibility = "visible"
    count++;
  }
}


document.getElementById("submitbtn").addEventListener("click", linker);

function linker(){
  if (document.getElementById("inputbox").value === "2829") {
    document.getElementById("anchor2").href = "act4scene1.html"
  }
}
