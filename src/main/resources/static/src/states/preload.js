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
        game.load.image('blankcard', 'assets/Card.png');
        game.load.image('flag1', 'assets/flag.png');
        game.load.image('flag2', 'assets/redflag.png');
        game.load.image('arrow', 'assets/arrow.png');
        game.load.image('ok', 'assets/ok.png');

    },

    create: function() {
        
    },

    update: function() {
        game.state.start('languageState');
    }
}