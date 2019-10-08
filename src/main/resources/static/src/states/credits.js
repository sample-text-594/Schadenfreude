Schadenfreude.creditsState = function(game) {

}

Schadenfreude.creditsState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **CREDITS** state");
		}
	},

    preload: function() {
        
    },

    create: function() {
        backB = game.add.button(605, 460, 'ok', backButton, this);
    },

    update: function() {
        
    }
}

function backButton() {
    game.state.start('menuState');    
}