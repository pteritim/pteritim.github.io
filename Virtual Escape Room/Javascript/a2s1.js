document.getElementById("submitbtn").addEventListener("click", linker);

function linker(){
  if (document.getElementById("c").value === "1" && document.getElementById("a").value === "2" && document.getElementById("m").value === "3" && document.getElementById("p").value === "4" && document.getElementById("f").value === "5" && document.getElementById("i").value === "6" && document.getElementById("r").value === "7" && document.getElementById("e").value === "8"){
    document.getElementById("anchor").href = "act2scene2.html";
    document.getElementById("anchor").style.visibility = "visible";
    document.getElementById("failtext").style.visibility = "visible";
  }
}

document.getElementById("call").addEventListener("click", reveal1);

function reveal1(){
  document.getElementById("flavour").style.visibility = "visible";
  document.getElementById("puzzle").style.visibility = "visible";
  document.getElementById("submit").style.visibility = "visible";
}

document.getElementById("follow").addEventListener("click", reveal2);

function reveal2(){
  document.getElementById("anchor2").style.visibility = "visible";
  document.getElementById("choice").style.visibility = "visible";
}
