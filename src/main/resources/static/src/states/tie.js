Schadenfreude.tieState = function(game) {

}

Schadenfreude.tieState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **TIE** state");
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

        this.tie = game.add.sprite(0, 0, 'tie');
    	this.tie.scale.setTo(1.2, 2);
        this.tie.posX = 350;
        this.tie.posY = 150;
        this.tie.escalaX = 1.5;
        this.tie.escalaY = 1.5;
        this.resizeBuffer.push(this.tie);
        
        if (game.global.room.elecciones) {
        	if (game.global.lang == 'es') {
        		var text = "Nuevas elecciones.\n Se reinicia el país y, con él, tu espectacular partida.";
        	} else {
        		var text = "Did you pulse the BrEXIT button? The country reboots itself and, with it, your astonishing game.";
        	}
            var style = { font: "40px Arial", fill: "#555555", align: "center" };
            var text = game.add.text(300, 320, text, style);
            text.posX = 200;
            text.posY = 320;
            text.escalaX = 1;
            text.escalaY = 1;
            this.resizeBuffer.push(text);
        }

        backB = game.add.button(0, 0, 'atras', backButton, this);
        backB.posX = 20;
        backB.posY = 630;
        backB.escalaX = 1;
        backB.escalaY = 1;
        this.resizeBuffer.push(backB);
        
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

function backButton() {
    game.state.start('menuState');    
}