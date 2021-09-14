let menuText = document.querySelectorAll('.menu_text');

function addClassGlitch(){
	setInterval(function(){
		let randEl = menuText[Math.floor(Math.random()*menuText.length)]
		randEl.classList.add('glitch')
		setTimeout(function(){
			randEl.classList.remove('glitch')
		},500)
	},7000)
}
addClassGlitch()