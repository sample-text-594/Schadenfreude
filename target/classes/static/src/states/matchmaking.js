Schadenfreude.matchmakingState = function(game) {

}

Schadenfreude.matchmakingState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **MATCHMAKING** state");
		}
	},

    preload: function() {
        
    },

    create: function() {
    	let msg = new Object();
    	
    	msg.type = 'MATCHMAKING';
    	msg.event = 'PUT ON QUEUE';
    	
    	if (game.global.DEBUG_MODE) {
    		console.log("[DEBUG] Sending PUT ON QUEUE message to server");
    	}
    	
    	game.global.socket.send(JSON.stringify(msg));
    },

    update: function() {
    	if (game.global.room !== undefined) {
    		game.state.start('levelState')
    	}
    }
}