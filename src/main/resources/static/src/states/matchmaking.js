Schadenfreude.matchmakingState = function(game) {

}

Schadenfreude.matchmakingState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **MATCHMAKING** state");
		}
        
        game.scale.setResizeCallback(this.resize, this);
	},

    preload: function() {
    	this.resizeBuffer = [];
    },

    create: function() {
    	var text = "Buscando partida...";
        var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
        var text = game.add.text(500, 300, text, style);
        text.posX = 500;
        text.posY = 300;
        text.escalaX = 1;
        text.escalaY = 1;
        this.resizeBuffer.push(text);
        
        
    	let msg = new Object();
    	
    	msg.type = 'MATCHMAKING';
    	msg.event = 'PUT ON QUEUE';
    	
    	if (game.global.DEBUG_MODE) {
    		console.log("[DEBUG] Sending PUT ON QUEUE message to server");
    	}
    	
    	game.global.socket.send(JSON.stringify(msg));
        
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
    	if (game.global.room !== undefined) {
    		game.state.start('levelState')
    	}
    }
}