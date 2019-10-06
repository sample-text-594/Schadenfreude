Schadenfreude.preloadState = function(game) {

}

Schadenfreude.preloadState.prototype = {

    init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **PRELOAD** state");
		}
    },

    preload: function() {

        var text = "Loading...";
        var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
        var text = game.add.text(game.world.centerX, game.world.centerX, text, style);
        
        //Load Assets
        game.load.image('card', 'assets/Card.png');

    },

    create: function() {
        
    },

    update: function() {
        game.state.start('languageState');
    }
}