Schadenfreude.preloadState = function(game) {

}

Schadenfreude.preloadState.prototype = {

    init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **PRELOAD** state");
		}
        
        game.scale.setResizeCallback(this.resize, this);
    },

    preload: function() {
    	this.resizeBuffer = [];

        var text = "Loading...";
        var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
        var text = game.add.text(500, 300, text, style);
        text.posX = 500;
        text.posY = 300;
        text.escalaX = 1;
        text.escalaY = 1;
        this.resizeBuffer.push(text);
        
        //Load Assets
        game.load.image('blankcard', 'assets/Card.png');
        game.load.image('flag1', 'assets/flag.png');
        game.load.image('flag2', 'assets/redflag.png');
        game.load.image('arrow', 'assets/arrow.png');
        game.load.image('ok', 'assets/ok.png');
        
        //Interfaz
        game.load.image('marcaEscudo', 'assets/interface/marcaEscudo.png');
        game.load.image('marcaEscudoV', 'assets/interface/marcaEscudoV.png');
        game.load.image('marcaEspada', 'assets/interface/marcaEspada.png');
        game.load.image('marcaEspadaV', 'assets/interface/marcaEspadaV.png');
        game.load.spritesheet('barraEstres', 'assets/interface/spritesheetBarra.png', 120, 646);
        game.load.image('ruedaHoras', 'assets/interface/ruedaHoras.png');
        game.load.image('fondo', 'assets/interface/fondo.png');
        game.load.image('esFlag', 'assets/interface/español.png');
        game.load.image('enFlag', 'assets/interface/ingles.png');        
        game.load.image('mainTitle', 'assets/interface/mainTitle.png');        
        game.load.image('mainTitle+playB', 'assets/interface/mainTitle+playB.png');        
        game.load.image('settingsB', 'assets/interface/ajustes.png');        
        game.load.image('credsB', 'assets/interface/bCreditos.png');        
        game.load.image('playB', 'assets/interface/ClickToPlay.png');        
        game.load.image('hScoreB', 'assets/interface/highscore.png');        
        game.load.image('langB', 'assets/interface/langButton.png');        
        game.load.image('mas', 'assets/interface/mas.png');        
        game.load.image('menos', 'assets/interface/menos.png');        
        game.load.image('atras', 'assets/interface/atras.png');
        game.load.image('sonido', 'assets/interface/sonido.png');                
        game.load.image('score', 'assets/interface/score.png');
        game.load.image('okB', 'assets/interface/ok.png');
        game.load.image('win', 'assets/interface/ganaste.png');
        game.load.image('tie', 'assets/interface/empataste.png');
        game.load.image('lose', 'assets/interface/perdiste.png');
        
        //Cargamos las cartas en español
        for (var i = 0; i < 50; i++) {
            game.load.image('carta' + i + 'es', 'assets/es/carta' + i + '.png');
        }
        
        for (var i = 0; i < 6; i++) {
            game.load.image('carta5' + i + 'aes', 'assets/es/carta5' + i + 'a.png');
            game.load.image('carta5' + i + 'bes', 'assets/es/carta5' + i + 'b.png');
        }

        //Cargamos las cartas en ingles
        for (var i = 0; i < 50; i++) {
            game.load.image('carta' + i + 'en', 'assets/en/carta' + i + '.png');
        }
        
        for (var i = 0; i < 6; i++) {
            game.load.image('carta5' + i + 'aen', 'assets/en/carta5' + i + 'a.png');
            game.load.image('carta5' + i + 'ben', 'assets/en/carta5' + i + 'b.png');
        }
        
        //Cargamos los reversos
        game.load.image('0back', 'assets/backs/Transporte_reverso.png');
        game.load.image('1back', 'assets/backs/Alimentacion_reverso.png');
        game.load.image('2back', 'assets/backs/Hogar_reverso.png');
        game.load.image('3back', 'assets/backs/Trabajo_reverso.png');
        game.load.image('4back', 'assets/backs/Social_reverso.png');
        game.load.image('5back', 'assets/backs/Especiales_reverso.png');
    },

    create: function() {
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
        game.state.start('languageState');
    }
}