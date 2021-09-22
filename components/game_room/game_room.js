

  // let body = document.querySelector('body')
  
  // function listenerCanvas(mutations,observer){
    
  let canvas = document.getElementById('canvas')
  let canvContainer = document.getElementById('canvas_container')
  let cw = canvas.width  = canvContainer.offsetWidth
  let ch = canvas.height = canvContainer.offsetHeight
  let ctx    = canvas.getContext('2d')

    
  window.onresize = function(){
    cw = canvas.width  = canvContainer.offsetWidth
    ch = canvas.height = canvContainer.offsetHeight
      
  }
  // const config = {
  //     attributes: true,
  //     childList: true,
  //     subtree: true
  // };
  // let observerN = new MutationObserver(listenerCanvas)
  // observerN.observe(body,config)



// document.addEventListener('DOMContentLoaded',function(){
//   function s (m,n){
//   console.log(true)
// }
// let body = document.querySelector('body')
// const config = {
//       attributes: true,
//       childList: true,
//       subtree: true
//   };
// let observerN = new MutationObserver(s);
// // console.log(observerN)
// observerN.observe(body,config)
// })
// let canvContainer = document.querySelector('.canvas_container')
// let canvas = document.querySelector('canvas')
//     let ctx    = canvas.getContext('2d')
//     canvas.width  = canvContainer.offsetWidth;
//     canvas.height = canvContainer.offsetHeight;
//     ctx.fillStyle = 'green'
//     ctx.fillRect(100,100,500,500)
//     console.log('asdfsadf')
