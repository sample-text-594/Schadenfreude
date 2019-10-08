Schadenfreude.endgameState = function(game) {

}

Schadenfreude.endgameState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **ENDGAME** state");
		}
	},

    preload: function() {
        
    },

    create: function() {

        var score = 0;
        var scoreRival = 0;
        nextB = game.add.button(605, 460, 'ok', function () {
            if (score > scoreRival){
                game.state.start('winState');    
            } else if (score == scoreRival){
                game.state.start('tieState');
            } else {
                game.state.start('loseState');    
            }
        }, this);
    },

    update: function() {
        
    }
}