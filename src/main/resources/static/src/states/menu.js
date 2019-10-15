Schadenfreude.menuState = function(game) {

}

Schadenfreude.menuState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **MENU** state");
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

        playB = game.add.button(0, 0, 'mainTitle+playB', playButton, this);
        playB.scale.setTo(0.5, 0.5);
        playB.posX = 70;
        playB.posY = 00;
        playB.escalaX = 1;
        playB.escalaY = 1;
        this.resizeBuffer.push(playB);
        
        settingsB = game.add.button(0, 0, 'settingsB', settingsButton, this);
        settingsB.scale.setTo(0.5, 0.5);
        settingsB.posX = 1200;
        settingsB.posY = 630;
        settingsB.escalaX = 0.9;
        settingsB.escalaY = 0.9;
        this.resizeBuffer.push(settingsB);
        
        hiscoreB = game.add.button(0, 0, 'hScoreB', hiscoreButton, this);
        hiscoreB.scale.setTo(0.5, 0.5);
        hiscoreB.posX = 1070;
        hiscoreB.posY = 630;
        hiscoreB.escalaX = 0.9;
        hiscoreB.escalaY = 0.9;
        this.resizeBuffer.push(hiscoreB);
        
        credsB = game.add.button(0, 0, 'credsB', credsButton, this);
        credsB.scale.setTo(0.5, 0.5);
        credsB.posX = 1170;
        credsB.posY = 20;
        credsB.escalaX = 1;
        credsB.escalaY = 1;
        this.resizeBuffer.push(credsB);

        langB = game.add.button(0, 0, 'langB', langButton, this);
        langB.scale.setTo(0.5, 0.5);
        langB.posX = 1080;
        langB.posY = 20;
        langB.escalaX = 0.9;
        langB.escalaY = 0.9;
        this.resizeBuffer.push(langB);
        
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

function playButton() {
    game.state.start('matchmakingState');    
}

function hiscoreButton() {
    game.state.start('hiscoreState');    
}

function settingsButton() {
    game.state.start('settingsState');    
}

function credsButton() {
    game.state.start('creditsState');    
}

function langButton() {
    game.state.start('languageState');    
}