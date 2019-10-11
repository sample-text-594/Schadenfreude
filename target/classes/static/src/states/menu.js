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
        playB = game.add.button(100, 200, 'ok', playButton, this);
        playB.scale.setTo(0.5, 0.5);
        playB.posX = 100;
        playB.posY = 200;
        playB.escalaX = 0.5;
        playB.escalaY = 0.5;
        this.resizeBuffer.push(playB);
        
        settingsB = game.add.button(100, 370, 'ok', settingsButton, this);
        settingsB.scale.setTo(0.5, 0.5);
        settingsB.posX = 100;
        settingsB.posY = 370;
        settingsB.escalaX = 0.5;
        settingsB.escalaY = 0.5;
        this.resizeBuffer.push(settingsB);
        
        hiscoreB = game.add.button(345, 370, 'ok', hiscoreButton, this);
        hiscoreB.scale.setTo(0.5, 0.5);
        hiscoreB.posX = 345;
        hiscoreB.posY = 370;
        hiscoreB.escalaX = 0.5;
        hiscoreB.escalaY = 0.5;
        this.resizeBuffer.push(hiscoreB);
        
        credsB = game.add.button(605, 460, 'ok', credsButton, this);
        credsB.scale.setTo(0.5, 0.5);
        credsB.posX = 605;
        credsB.posY = 460;
        credsB.escalaX = 0.5;
        credsB.escalaY = 0.5;
        this.resizeBuffer.push(credsB);
        
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