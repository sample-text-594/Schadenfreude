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
        var flag1 = game.add.button(game.global.width*0.15, game.global.height*0.4, 'flag1', espButton, this);
        var flag2 = game.add.button(game.global.width*0.55, game.global.height*0.4, 'flag2', engButton, this);
        flag1.scale.setTo(0.5, 0.5);
        flag2.scale.setTo(0.5, 0.5);

    },

    update: function() {
        //game.state.start('menuState');
    }
    
}

function espButton() {
	game.global.lang = 'es';
    game.state.start('menuState');    
}

function engButton() {
    game.global.lang = 'en';
    game.state.start('menuState');    
}