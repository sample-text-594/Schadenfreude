Schadenfreude.endgameState = function(game) {

}

Schadenfreude.endgameState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **ENDGAME** state");
		}
        
        game.scale.setResizeCallback(this.resize, this);
	},

    preload: function() {
    	this.resizeBuffer = [];
    },

    create: function() {

        var score = 0;
        var scoreRival = 0;
        nextB = game.add.button(605, 460, 'ok', function () {
            if (score > scoreRival){
                game.state.start('winState');    
            } else if (score == scoreRival){
                game.state.start('tieState');
            } else {
                game.state.start('loseState');    
            }
        }, this);
        nextB.posX = 605;
        nextB.posY = 460;
        nextB.escalaX = 1;
        nextB.escalaY = 1;
        this.resizeBuffer.push(nextB);
        
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