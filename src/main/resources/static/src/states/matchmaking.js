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

    },

    update: function() {
        game.state.start('levelState')
    }
}