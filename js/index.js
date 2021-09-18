document.body.innerHTML = indexHtml

function addClassGlitch(){
  	
	setInterval(function(){
		let menuText = document.querySelectorAll('.menu_text');
		console.log(menuText)
		let randomEl = menuText[Math.floor(Math.random() * menuText.length)]
		randomEl.classList.add('glitch')
		setTimeout(function(){
			randomEl.classList.remove('glitch')
		},500)
	},7000)

}
addClassGlitch()

function toggleFullScreenMode(){
  let menuText = document.body.querySelectorAll('.menu_text');
  	if(document.fullscreenElement === null){
  	 	menuText[3].innerText = 'windowscreen';
  	 	menuText[3].setAttribute('data-text','windowscreen')
  	 	document.documentElement.requestFullscreen()
  	}
	  else{
  	 	if(document.fullscreenEnabled){
  	 		menuText[3].innerText = 'fullscreen';
  	 	  menuText[3].setAttribute('data-text','fullscreen') 	 		
  	 		document.exitFullscreen()
  	 	} 
	  }
  		
}
// toggleFullScreenMode()

function loadGameRoom(){
	document.body.innerHTML = gameRoom
}
function loadIndexHtml(){
	document.body.innerHTML = indexHtml
}
