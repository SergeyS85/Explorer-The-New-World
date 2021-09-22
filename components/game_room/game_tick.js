function tick(){
	ctx.clearRect(0, 0, cw, ch);
	// //////////////////////
	
  gameMap()
  // //////////////////////

	requestAnimationFrame(tick)
}

function init(){
	moveGameWorldMap()
	loadImage()
	tick()
}
init()