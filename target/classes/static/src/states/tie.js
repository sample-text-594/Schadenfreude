Schadenfreude.tieState = function(game) {

}

Schadenfreude.tieState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **TIE** state");
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