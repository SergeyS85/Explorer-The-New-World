let mainblock = document.querySelector('.parallax_block-main')



window.addEventListener('mousemove',function(e){
	let bottomblock = document.querySelector('.parallax_block-bottom')
  let rightblock = document.querySelector('.parallax_block-right')
  let leftblock = document.querySelector('.parallax_block-left')
	let x = e.pageX/document.body.clientWidth
  let y = e.pageY/document.body.clientHeight
  bottomblock.style.transform = 'translate(-'+x*60+'px, -'+y*10+'px)'
  rightblock.style.transform = 'translate(-'+x*20+'px,  0px)'
  leftblock.style.backgroundPosition = '-'+x/5*50+'px  0px'
  // console.dir(x,y)
})
// console.log(document.body.clientWidth)
