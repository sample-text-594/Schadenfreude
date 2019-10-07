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
        
        var text = "Elige el idioma:";
        var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
        var text = game.add.text(0, 0, text, style);
        game.add.button(game.global.width*0.2, game.global.height*0.2, 'blankcard', espButton, this);
        game.add.button(game.global.width*0.6, game.global.height*0.2, 'blankcard', engButton, this);

    },

    update: function() {
        //game.state.start('menuState');
    }
    
}

function espButton() {
    game.state.start('menuState');    
}

function engButton() {
    game.global.lang = 'en';
    game.state.start('menuState');    
}