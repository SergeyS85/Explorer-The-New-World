let indexHtml = `<audio src="sound/Dark Ambient Melodies.waw" autoplay="autoplay"> </audio>
	<div class="wrapper">
    <div class="social_groop_block">
      <div class="min_social_logo"><a target='_blank' class='git' href="https://github.com/SergeyS85"></a></div>
      <div class="min_social_logo"><a target='_blank' class='linkedin' href="https://www.linkedin.com/in/sergey-surzhik-a9588821b/"></a></div>
      <div class="min_social_logo"><a target='_blank' class='vk' href="https://vk.com/id65694338"></a></div>
    </div>
    <p class="mini_logo_technologi">H<span class="c">c</span><span class='j'>J</span></p>
		<h1>"Cassiopeya": The New World</h1>
		<p class='menu_text' onclick='loadGameRoom()' data-text='Play'>Play</p>
    <p class='menu_text'data-text='Save/Load'>Save / Load</p>
    <p class='menu_text'data-text='Options'>Options</p>
    <p class='menu_text'onclick='toggleFullScreenMode()' data-text='Fullscreen'>Fullscreen</p>
    <p class='menu_text'data-text='Autor'>Autor</p>
    <p class='menu_text'data-text='Exit'>Exit</p>
	</div> `

	let gameRoom = `<audio src="sound/Sands of Arrakis - An EPIC Ambient Music Journey - Inspired By The Movie DUNE [V.waw" autoplay="autoplay"> </audio>
	<div class="wrapper_game_room">
		<div class="top_menu">
      <li>Торий :<span>3 455</span></li>
      <li>Берилий :<span>12</span></li>
      <li>Уран :<span>347</span></li>
      <li>Камень :<span>2 024</span></li>
      <li>Дейтерий :<span>258</span></li>
      <li onclick='loadIndexHtml()'>Меню</li>  
    </div>
    <div class="game_scope">
      <div id="canvas_container">
        <canvas id='canvas'></canvas>
      </div>
      <div class="game_tools">
        <div class="properties_block">
          <div class="properties_icon"></div>
          <div class="properties_icon"></div>
          <div class="properties_icon"></div>
          <div class="properties_icon"></div>
          <div class="properties_icon"></div>
          <div class="properties_icon"></div>
          <div class="properties_icon"></div>
          <div class="properties_icon"></div>
          <div class="properties_icon"></div>
          <div class="properties_icon"></div>
          <div class="properties_icon"></div>
        </div>
      </div>
    </div>
    <div class="bottom_menu"></div>
	</div> `