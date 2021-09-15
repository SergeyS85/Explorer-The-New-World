function addClassGlitch(){
	let menuText = document.querySelectorAll('.menu_text');
	setInterval(function(){
		let randomEl = menuText[Math.floor(Math.random() * menuText.length)]
		randomEl.classList.add('glitch')
		setTimeout(function(){
			randomEl.classList.remove('glitch')
		},500)
	},7000)
}
addClassGlitch()