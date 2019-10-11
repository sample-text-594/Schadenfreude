window.onload = function() {
	game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'gameDiv');

	// GLOBAL VARIABLES
	game.global = {
		scale : 1,
		width : 1280,
		height : 720,
		FPS : 30,
		DEBUG_MODE : true,
		socket : null,
		lang : "es",
		player : undefined,
		room : undefined
	}

	// WEBSOCKET CONFIGURATOR
	game.global.socket = new WebSocket("ws://" + window.location.hostname + ":8080/game");
	
	game.global.socket.onopen = () => {
		if (game.global.DEBUG_MODE) {
			console.log('[DEBUG] WebSocket connection opened.');
		}
	}

	game.global.socket.onclose = () => {
		if (game.global.DEBUG_MODE) {
			console.log('[DEBUG] WebSocket connection closed.');
		}
	}
	
	game.global.socket.onmessage = (message) => {
		var msg = JSON.parse(message.data);
		
		switch (msg.event) {
		case 'GAME READY':
			game.global.player = {
				stress : msg.stress,
				handSize : msg.handsize,
				hand : msg.hand
			}
			game.global.room = msg.roomid;
			break;
		default :
			console.dir(msg);
			break;
		}
	}

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