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
        
        //Cargamos las cartas en español
        for (var i = 0; i < 51; i++) {
            game.load.image('carta' + i + 'es', 'assets/es/carta' + i + '.png');
        }
        
        for (var i = 1; i < 6; i++) {
            game.load.image('carta5' + i + 'aes', 'assets/es/carta5' + i + 'a.png');
            game.load.image('carta5' + i + 'bes', 'assets/es/carta5' + i + 'b.png');
        }

        //Cargamos las cartas en ingles
        for (var i = 0; i < 51; i++) {
            game.load.image('carta' + i + 'en', 'assets/en/carta' + i + '.png');
        }
        
        for (var i = 1; i < 6; i++) {
            game.load.image('carta5' + i + 'aen', 'assets/en/carta5' + i + 'a.png');
            game.load.image('carta5' + i + 'ben', 'assets/en/carta5' + i + 'b.png');
        }
    },

    create: function() {
        
    },

    update: function() {
        game.state.start('languageState');
    }
}