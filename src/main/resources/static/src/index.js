window.onload = function() {
	game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'gameDiv');

	// GLOBAL VARIABLES
	game.global = {
		scale : 1,
		sound : 9,
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
				hand : msg.hand,
				handTypes : msg.handTypes,
				turn : msg.turn,
				side : msg.side
			}
			game.global.room = {
				id : msg.roomid,
				cardsAllowed : msg.cardsAllowed,
				attackCardPlayed : false,
				attackCard : -1,
				defenseCardPlayed : false,
				defenseCard : -1,
				beginTurn : false,
				time : 'mañana',
				reDraw : false
			}
			break;
		case 'ATTACK CARD PLAYED':
			game.global.room.cardsAllowed = [msg.cardType, 5];
			game.global.room.attackCardPlayed = true;
			break;
		case 'DEFENSE CARD PLAYED':
			game.global.player.stress = msg.stress;
			game.global.room.attackCard = msg.attackCardId;
			game.global.room.defenseCard = msg.defenseCardId;
			game.global.room.defenseCardPlayed = true;
			break;
		case 'BEGIN TURN':
			if (game.global.room.time != msg.time) {
				game.global.room.timeRotate = true;
			}
			game.global.room.time = msg.time;

			for (var i = 0; i < 6; i++) {
				if (game.global.player.hand[i] == -1 && msg.hand[i] != -1) {
					game.global.player.hand[i] = msg.hand[i];
					game.global.player.handTypes[i] = msg.handTypes[i];
				}
			}
			if (game.global.player.side == "ataque") {
				game.global.room.cardsAllowed = msg.cardsAllowed;
			}
			game.global.room.beginTurn = true;
			break;
		case 'SIDE SWAP':
			game.global.player.hand = msg.hand;
			game.global.player.handTypes = msg.handTypes;
			game.global.player.stress = msg.stress;
			game.global.player.side = msg.side;
			
			game.global.room.cardsAllowed = msg.cardsAllowed;
			game.global.room.time = "mañana";
			game.global.room.timeRotate = true;
			
			game.global.room.reDraw = true;
			console.dir(msg);
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