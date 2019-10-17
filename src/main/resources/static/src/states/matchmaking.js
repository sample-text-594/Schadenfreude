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
		
		this.fondo = game.add.sprite(0, 0, 'fondo');
    	this.fondo.scale.setTo(2, 2);
        this.fondo.posX = 0;
        this.fondo.posY = 0;
        this.fondo.escalaX = 2;
        this.fondo.escalaY = 2;
        this.resizeBuffer.push(this.fondo);
		
		if(game.global.lang == "es"){
			this.searching = game.add.sprite(50, 50, 'buscando', 0);
			this.searching.posX = 300;
			this.searching.posY = 250;
			this.searching.escalaX = 1;
			this.searching.escalaY = 1;
			this.resizeBuffer.push(this.searching);
		} else {
			this.searching = game.add.sprite(50, 50, 'searching', 0);
			this.searching.posX = 300;
			this.searching.posY = 250;
			this.searching.escalaX = 1;
			this.searching.escalaY = 1;
			this.resizeBuffer.push(this.searching);
		}
        
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
    		game.global.music.stop();
    		game.global.music = game.add.audio('gameMusic');
        	game.global.music.loop = true;
        	game.global.music.play();
        	game.global.music.volume = game.global.sound/10;
    		game.state.start('levelState')
    	}
    }
}