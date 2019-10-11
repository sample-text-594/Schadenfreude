Schadenfreude.languageState = function(game) {

}

Schadenfreude.languageState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **LANGUAGE** state");
		}
        
        game.scale.setResizeCallback(this.resize, this);
	},

    preload: function() {
    	this.resizeBuffer = [];
    },

    create: function() {
        
        var text = "Elige el idioma:";
        var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
        var text = game.add.text(0, 0, text, style);
        text.posX = 0;
        text.posY = 0;
        text.escalaX = 1;
        text.escalaY = 1;
        this.resizeBuffer.push(text);
        
        var flag1 = game.add.button(game.global.width*0.15, game.global.height*0.4, 'flag1', espButton, this);
        flag1.scale.setTo(0.5, 0.5);
        flag1.posX = 200;
        flag1.posY = 300;
        flag1.escalaX = 0.5;
        flag1.escalaY = 0.5;
        this.resizeBuffer.push(flag1);
        
        var flag2 = game.add.button(game.global.width*0.55, game.global.height*0.4, 'flag2', engButton, this);
        flag2.scale.setTo(0.5, 0.5);
        flag2.posX = 800;
        flag2.posY = 300;
        flag2.escalaX = 0.5;
        flag2.escalaY = 0.5;
        this.resizeBuffer.push(flag2);
        
        this.resize();
    },
    
    resize: function() {
    	var scaleRatioX = game.scale.width / 1280;
    	var scaleRatioY = game.scale.height / 720;
    	
    	for (var i = 0; i < this.resizeBuffer.length; i++) {
    		if (scaleRatioX < scaleRatioY) {
    			this.resizeBuffer[i].scale.setTo(this.resizeBuffer[i].escalaX * scaleRatioX, this.resizeBuffer[i].escalaY * scaleRatioX);
    		} else {
    			this.resizeBuffer[i].scale.setTo(this.resizeBuffer[i].escalaX * scaleRatioY, this.resizeBuffer[i].escalaY * scaleRatioY);
    		}
    		
    		this.resizeBuffer[i].x = this.resizeBuffer[i].posX * scaleRatioX;
    		this.resizeBuffer[i].y = this.resizeBuffer[i].posY * scaleRatioY;
    	}
    },

    update: function() {
        
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