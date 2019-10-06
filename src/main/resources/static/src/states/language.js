Schadenfreude.languageState = function(game) {

}

Schadenfreude.languageState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **LANGUAGE** state");
		}
	},

    preload: function() {
        
    },

    create: function() {

    },

    update: function() {
        game.state.start('menuState');
    }
}