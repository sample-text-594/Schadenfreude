Schadenfreude.menuState = function(game) {

}

Schadenfreude.menuState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **MENU** state");
		}
	},

    preload: function() {
        
    },

    create: function() {

    },

    update: function() {
        game.state.start('matchmakingState');
    }
}