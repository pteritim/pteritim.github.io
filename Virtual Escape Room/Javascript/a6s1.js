document.getElementById("submitbtn").addEventListener("click",linker);

function linker(){
  if (document.getElementById("inputbox").value === "23"){
    document.getElementById("anchor").href = "act6scene2.html";
  }
}
