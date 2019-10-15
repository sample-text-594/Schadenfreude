Schadenfreude.settingsState = function(game) {

}

Schadenfreude.settingsState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **SETTINGS** state");
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

        this.sonido = game.add.sprite(0, 0, 'sonido');
    	this.sonido.scale.setTo(1.2, 2);
        this.sonido.posX = 150;
        this.sonido.posY = 250;
        this.sonido.escalaX = 1;
        this.sonido.escalaY = 1;
        this.resizeBuffer.push(this.sonido);
        
        var text = game.global.sound;
        var style = { font: "125px Arial", fill: "#ffffff", align: "center" };
        var text = game.add.text(500, 300, text, style);
        text.posX = 655;
        text.posY = 300;
        text.escalaX = 1;
        text.escalaY = 1;
        this.resizeBuffer.push(text);

        backB = game.add.button(0, 0, 'atras', backButton, this);
        backB.posX = 20;
        backB.posY = 630;
        backB.escalaX = 1;
        backB.escalaY = 1;
        this.resizeBuffer.push(backB);

        moreB = game.add.button(0, 0, 'mas', function() {
            if(game.global.sound < 9){
                game.global.sound++;
                text.setText(game.global.sound);        
            }
        }, this);
        moreB.posX = 800;
        moreB.posY = 278;
        moreB.escalaX = 1;
        moreB.escalaY = 1;
        this.resizeBuffer.push(moreB);

        lessB = game.add.button(0, 0, 'menos', function() {
            if(game.global.sound > 0){
                game.global.sound--;
                text.setText(game.global.sound);
            }
        }, this);
        lessB.posX = 400;
        lessB.posY = 350;
        lessB.escalaX = 1;
        lessB.escalaY = 1;
        this.resizeBuffer.push(lessB);
        
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