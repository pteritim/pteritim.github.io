var up1 = document.getElementById("up1");
var down1 = document.getElementById("down1");
var left1 = document.getElementById("left1");
var right1 = document.getElementById("right1");
var reset1 = document.getElementById("reset1");

var up2 = document.getElementById("up2");
var down2 = document.getElementById("down2");
var left2 = document.getElementById("left2");
var right2 = document.getElementById("right2");
var reset2 = document.getElementById("reset2");

up1.addEventListener("click", function1);
down1.addEventListener("click",function2);
left1.addEventListener("click", function3);
right1.addEventListener("click",function4);
reset1.addEventListener("click",function5);

up2.addEventListener("click", function1);
down2.addEventListener("click",function2);
left2.addEventListener("click", function3);
right2.addEventListener("click",function4);
reset2.addEventListener("click",function5);

var count = 0;

function function1(){
  count = 5;

}

function function2(){
  if (count === 1){
    count++;
  }
  else if (count === 3) {
    document.getElementById("anchor").style.visibility = "visible";
  }
  else {
    count = 5;
  }
}

function function3(){
  if (count === 0){
    count++;
  }
  else{
    count = 5;
  }
}


function function4(){
  if (count === 2){
    count++;
  }
  else {
    count = 5;
  }
}

function function5(){
  count = 0;
}


document.getElementById("revealbtn").addEventListener("click",reveal);

function reveal(){
  document.getElementById("ifflashlight").style.visibility = "visible";
}


// Flashlight starts

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById("maze2");

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('../Images/Scene Images/Act 4 Hope/Scene 1/maze.jpg')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = img.width + "px " + img.height + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
magnify("maze2", 1);
