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
        
        var score = 10;
        var scoreRival = 20;

        this.fondo = game.add.sprite(0, 0, 'fondo');
    	this.fondo.scale.setTo(1.2, 2);
        this.fondo.posX = 0;
        this.fondo.posY = 0;
        this.fondo.escalaX = 2;
        this.fondo.escalaY = 2;
        this.resizeBuffer.push(this.fondo);

        this.scoreimg = game.add.sprite(0, 0, 'score');
    	this.scoreimg.scale.setTo(1.2, 2);
        this.scoreimg.posX = 55;
        this.scoreimg.posY = 0;
        this.scoreimg.escalaX = 1;
        this.scoreimg.escalaY = 1;
        this.resizeBuffer.push(this.scoreimg);
        
        var text = score + " - " + scoreRival;
        var style = { font: "125px Arial", fill: "#ffffff", align: "center" };
        var text = game.add.text(500, 300, text, style);
        text.posX = 450;
        text.posY = 300;
        text.escalaX = 1;
        text.escalaY = 1;
        this.resizeBuffer.push(text);

        nextB = game.add.button(0, 0, 'okB', function () {
            if (score > scoreRival){
                game.state.start('winState');    
            } else if (score == scoreRival){
                game.state.start('tieState');
            } else {
                game.state.start('loseState');    
            }
        }, this);
        nextB.posX = 590;
        nextB.posY = 500;
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