window.onload = function() {

	var height = window.innerHeight*0.98;
	var width = height*16/9*0.98;
	game = new Phaser.Game(width, height, Phaser.CANVAS, 'gameDiv')

	// GLOBAL VARIABLES
	game.global = {
		scale : 1,
		width : width,
		height : height,
		FPS : 30,
		DEBUG_MODE : true,
		socket : null,
		lang : "es"
	}

	// WEBSOCKET CONFIGURATOR
	/*game.global.socket = new WebSocket("ws://127.0.0.1:8080/game")
	
	game.global.socket.onopen = () => {
		if (game.global.DEBUG_MODE) {
			console.log('[DEBUG] WebSocket connection opened.')
		}
	}

	game.global.socket.onclose = () => {
		if (game.global.DEBUG_MODE) {
			console.log('[DEBUG] WebSocket connection closed.')
		}
	}
	
	game.global.socket.onmessage = (message) => {
		var msg = JSON.parse(message.data)
		
		switch (msg.event) {
		
		default :
			console.dir(msg)
			break
		}
	}*/

	// PHASER SCENE CONFIGURATOR
	game.state.add('bootState', Schadenfreude.bootState)
	game.state.add('preloadState', Schadenfreude.preloadState)
	game.state.add('languageState', Schadenfreude.languageState)
	game.state.add('menuState', Schadenfreude.menuState)
	game.state.add('matchmakingState', Schadenfreude.matchmakingState)
	game.state.add('levelState', Schadenfreude.levelState)
	game.state.add('endgameState', Schadenfreude.endgameState)
	game.state.add('winState', Schadenfreude.winState)
	game.state.add('loseState', Schadenfreude.loseState)
	game.state.add('tieState', Schadenfreude.tieState)
	game.state.add('settingsState', Schadenfreude.settingsState)
	game.state.add('hiscoreState', Schadenfreude.hiscoreState)
	game.state.add('creditsState', Schadenfreude.creditsState)

	game.state.start('bootState')

}