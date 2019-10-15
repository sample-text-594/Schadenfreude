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

    	this.fondo = game.add.sprite(0, 0, 'fondo');
    	this.fondo.scale.setTo(1.2, 2);
        this.fondo.posX = 0;
        this.fondo.posY = 0;
        this.fondo.escalaX = 2;
        this.fondo.escalaY = 2;
        this.resizeBuffer.push(this.fondo);
        
        var flag1 = game.add.button(0, 0, 'esFlag', espButton, this);
        flag1.scale.setTo(0.5, 0.5);
        flag1.posX = -100;
        flag1.posY = 100;
        flag1.escalaX = 0.75;
        flag1.escalaY = 0.75;
        this.resizeBuffer.push(flag1);
        
        var flag2 = game.add.button(0, 0, 'enFlag', engButton, this);
        flag2.scale.setTo(0.5, 0.5);
        flag2.posX = 500;
        flag2.posY = 100;
        flag2.escalaX = 0.75;
        flag2.escalaY = 0.75;
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