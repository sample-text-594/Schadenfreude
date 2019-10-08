Schadenfreude.loseState = function(game) {

}

Schadenfreude.loseState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **LOSE** state");
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