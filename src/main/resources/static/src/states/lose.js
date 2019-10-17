Schadenfreude.loseState = function(game) {

}

Schadenfreude.loseState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **LOSE** state");
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

        this.lose = game.add.sprite(0, 0, 'lose');
        this.lose.scale.setTo(1.2, 2);
        this.lose.posX = 430;
        this.lose.posY = 150;
        this.lose.escalaX = 1;
        this.lose.escalaY = 1;
        this.resizeBuffer.push(this.lose);

        backB = game.add.button(0, 0, 'atras', backButton, this);
        backB.posX = 20;
        backB.posY = 630;
        backB.escalaX = 1;
        backB.escalaY = 1;
        this.resizeBuffer.push(backB);
        
        this.resize();
        
        game.global.player = undefined;
        game.global.room = undefined;
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

function backButton() {
    game.state.start('menuState');    
}