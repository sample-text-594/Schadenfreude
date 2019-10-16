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
        
        this.fondo = game.add.sprite(0, 0, 'fondo');
    	this.fondo.scale.setTo(2, 2);
        this.fondo.posX = 0;
        this.fondo.posY = 0;
        this.fondo.escalaX = 2;
        this.fondo.escalaY = 2;
        this.resizeBuffer.push(this.fondo);
        
        this.barraEstres = game.add.sprite(50, 50, 'loading', 0);
        this.barraEstres.posX = 225;
        this.barraEstres.posY = 320;
        this.barraEstres.escalaX = 1;
        this.barraEstres.escalaY = 1;
        this.resizeBuffer.push(this.barraEstres);

    	this.resize();
        
        //Interfaz

        //Level
        game.load.image('marcaEscudo', 'assets/interface/marcaEscudo.png');
        game.load.image('marcaEscudoV', 'assets/interface/marcaEscudoV.png');
        game.load.image('marcaEspada', 'assets/interface/marcaEspada.png');
        game.load.image('marcaEspadaV', 'assets/interface/marcaEspadaV.png');
        game.load.spritesheet('barraEstres', 'assets/interface/spritesheetBarra.png', 120, 646);
        game.load.image('ruedaHoras', 'assets/interface/ruedaHoras.png');
        game.load.image('pasarB', 'assets/interface/pasar.png');

        //Idioma
        game.load.image('esFlag', 'assets/interface/español.png');
        game.load.image('enFlag', 'assets/interface/ingles.png');    
        
        //Menu
        game.load.image('mainTitlees', 'assets/interface/en/mainTitle+playB.png');
        game.load.image('mainTitleen', 'assets/interface/es/mainTitle+playB.png');
        game.load.image('settingsB', 'assets/interface/ajustes.png');        
        game.load.image('credsBes', 'assets/interface/es/bCreditos.png');   
        game.load.image('credsBen', 'assets/interface/en/bCreditos.png');      
        game.load.image('playB', 'assets/interface/ClickToPlay.png'); 
        game.load.image('langBes', 'assets/interface/es/langButton.png');        
        game.load.image('langBen', 'assets/interface/en/langButton.png');  
        game.load.image('tutorialB', 'assets/interface/tutorial.png');        
        
        //Volumen
        game.load.image('mas', 'assets/interface/mas.png');        
        game.load.image('menos', 'assets/interface/menos.png');        
        game.load.image('atras', 'assets/interface/atras.png');
        game.load.image('sonido', 'assets/interface/sonido.png');
        
        //Endgame
        game.load.image('score', 'assets/interface/score.png');
        game.load.image('okB', 'assets/interface/ok.png');
        game.load.image('win', 'assets/interface/ganaste.png');
        game.load.image('tie', 'assets/interface/empataste.png');
        game.load.image('lose', 'assets/interface/perdiste.png');

        //Matchmaking
        game.load.image('buscando', 'assets/interface/es/buscando.png');
        game.load.image('searching', 'assets/interface/en/searching.png');

        //Créditos
        game.load.image('a_game_by', 'assets/interface/creditos/a_game_by.png');
        game.load.image('alberto', 'assets/interface/creditos/alberto.png');
        game.load.image('creditosEs', 'assets/interface/creditos/creditos_titulo.png');
        game.load.image('creditosEn', 'assets/interface/creditos/credits_titulo.png');
        game.load.image('david', 'assets/interface/creditos/david.png');
        game.load.image('enrique', 'assets/interface/creditos/enrique.png');
        game.load.image('facebook', 'assets/interface/creditos/facebook.png');
        game.load.image('itchio', 'assets/interface/creditos/itchio.png');
        game.load.image('jorge', 'assets/interface/creditos/jorge.png');
        game.load.image('juanje', 'assets/interface/creditos/juanje.png');
        game.load.image('logo', 'assets/interface/creditos/logo.png');
        game.load.image('mario', 'assets/interface/creditos/mario.png');
        game.load.image('sandra', 'assets/interface/creditos/sandra.png');
        game.load.image('twitter', 'assets/interface/creditos/twitter.png');
        game.load.image('web', 'assets/interface/creditos/web.png');
        game.load.image('youtube', 'assets/interface/creditos/youtube.png');
        
        //Tutorial
        game.load.image('flechaI', 'assets/interface/flechaI.png');
        game.load.image('flechaD', 'assets/interface/flechaD.png');
        game.load.image('barraL', 'assets/interface/barraL.png');
        game.load.image('barraV', 'assets/interface/barraV.png');
        game.load.image('escudo', 'assets/interface/escudo.png');
        game.load.image('espada', 'assets/interface/espada.png');
        game.load.image('logo', 'assets/interface/logo.png');
        game.load.image('repe', 'assets/interface/repe.png');
        game.load.image('rueda', 'assets/interface/rueda.png');
        game.load.image('screen', 'assets/interface/screen.png');

        //Textos español
        game.load.image('titulo', 'assets/interface/es/tutorial/titulo.png');        
        game.load.image('texto1', 'assets/interface/es/tutorial/texto1.png');
        game.load.image('texto2', 'assets/interface/es/tutorial/texto2.png');
        game.load.image('texto3', 'assets/interface/es/tutorial/texto3.png');
        game.load.image('texto4', 'assets/interface/es/tutorial/texto4.png');
        game.load.image('texto5', 'assets/interface/es/tutorial/texto5.png');
        game.load.image('texto6', 'assets/interface/es/tutorial/texto6.png');
        game.load.image('texto7', 'assets/interface/es/tutorial/texto7.png');
        game.load.image('texto8', 'assets/interface/es/tutorial/texto8.png');
        game.load.image('texto9', 'assets/interface/es/tutorial/texto9.png');
        game.load.image('texto10', 'assets/interface/es/tutorial/texto10.png');
        game.load.image('texto11', 'assets/interface/es/tutorial/texto11.png');
        game.load.image('texto12', 'assets/interface/es/tutorial/texto12.png');
        game.load.image('texto13', 'assets/interface/es/tutorial/texto13.png');
        game.load.image('texto14', 'assets/interface/es/tutorial/texto14.png');

        //Textos inglés
        game.load.image('title', 'assets/interface/en/tutorial/titulo.png');        
        game.load.image('text1', 'assets/interface/en/tutorial/texto1.png');
        game.load.image('text2', 'assets/interface/en/tutorial/texto2.png');
        game.load.image('text3', 'assets/interface/en/tutorial/texto3.png');
        game.load.image('text4', 'assets/interface/en/tutorial/texto4.png');
        game.load.image('text5', 'assets/interface/en/tutorial/texto5.png');
        game.load.image('text6', 'assets/interface/en/tutorial/texto6.png');
        game.load.image('text7', 'assets/interface/en/tutorial/texto7.png');
        game.load.image('text8', 'assets/interface/en/tutorial/texto8.png');
        game.load.image('text9', 'assets/interface/en/tutorial/texto9.png');
        game.load.image('text10', 'assets/interface/en/tutorial/texto10.png');
        game.load.image('text11', 'assets/interface/en/tutorial/texto11.png');
        game.load.image('text12', 'assets/interface/en/tutorial/texto12.png');
        game.load.image('text13', 'assets/interface/en/tutorial/texto13.png');
        game.load.image('text14', 'assets/interface/en/tutorial/texto14.png');
        
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
        game.load.image('-1back', 'assets/backs/General_reverso.png');
        game.load.image('0back', 'assets/backs/Transporte_reverso.png');
        game.load.image('1back', 'assets/backs/Alimentacion_reverso.png');
        game.load.image('2back', 'assets/backs/Hogar_reverso.png');
        game.load.image('3back', 'assets/backs/Trabajo_reverso.png');
        game.load.image('4back', 'assets/backs/Social_reverso.png');
        game.load.image('5back', 'assets/backs/Especiales_reverso.png');
        game.load.spritesheet('cartaAnim', 'assets/backs/aCarta.png', 751, 1051);
    },

    create: function() {

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