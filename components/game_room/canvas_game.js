let gamemap   = new Image();
let resursGif = new Image();
let active = false;
let currentX= -2;
let currentY= -2; 
let initialX;
let initialY;
let xOffset = currentX;
let yOffset = currentY;
let imageW  = 8000;
let imageH  = 5300;

function loadImage(){
  
	// gamemap.src = '../../img/build/mainisland-free.jpg'
  resursGif.src = '../../img/build/resurs.png'
}

function gameMap(x=currentX,y=currentY){	
  ctx.fillStyle = '#DFC98C'
  ctx.fillRect(x,y,2000,2000)
  ctx.drawImage(resursGif,100,100,400,400)
	// ctx.drawImage(gamemap,x,y,imageW,imageH)
}

function stopMapXY(e){
	if(currentX > 0) currentX = 0;
	if(currentX < -imageW+cw) currentX = -imageW+cw;
	if(currentY > 0) currentY = 0;
	if(currentY < -imageH+ch) currentY = -imageH+ch	
}
function dragStart(e) {
  canvContainer.style.cursor = 'grabbing'
  if (e.type === "mousedown") { 	
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }
  if (e.target === canvas) {
    active = true;
  } 
}
function dragEnd(e) {
  canvContainer.style.cursor = 'grab' 
  initialX = currentX;
  initialY = currentY; 
  active = false;  
}
function drag(e) {
  if (active) {
    if (e.type === "mousemove") {
      e.preventDefault(); 
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }     
    else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }   
    xOffset = currentX;
    yOffset = currentY;
    gameMap(currentX,currentY)
    stopMapXY(e)    
  }  
}
function checkPointer(e){
  if(e.target.id != 'canvas') active = false
}
function moveGameWorldMap(){
  // document.addEventListener('mousemove',checkPointer,false)
	canvContainer.addEventListener("mousedown", dragStart, false);
  canvContainer.addEventListener("mouseup", dragEnd, false);
  canvContainer.addEventListener("mousemove", drag, false);
}