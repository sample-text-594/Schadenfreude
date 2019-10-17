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
        game.load.image('atras', 'assets/interface/atras.png');        

        //Level
        game.load.image('marcaEscudo', 'assets/interface/level/marcaEscudo.png');
        game.load.image('marcaEscudoV', 'assets/interface/level/marcaEscudoV.png');
        game.load.image('marcaEspada', 'assets/interface/level/marcaEspada.png');
        game.load.image('marcaEspadaV', 'assets/interface/level/marcaEspadaV.png');
        game.load.image('pasarB', 'assets/interface/level/pasar.png');        
        game.load.image('ruedaHoras', 'assets/interface/level/ruedaHoras.png');
        game.load.spritesheet('barraEstres', 'assets/interface/level/spritesheetBarra.png', 120, 646);        

        //Idioma
        game.load.image('esFlag', 'assets/interface/idioma/español.png');
        game.load.image('enFlag', 'assets/interface/idioma/ingles.png');    
        
        //Menu
        game.load.image('settingsB', 'assets/interface/menu/ajustes.png');
        game.load.image('tutorialB', 'assets/interface/menu/tutorial.png');                
        game.load.image('credsBes', 'assets/interface/menu/es/bCreditos.png'); 
        game.load.image('langBes', 'assets/interface/menu/es/langButton.png');        
        game.load.image('mainTitleen', 'assets/interface/menu/es/mainTitle.png');        
        game.load.image('credsBen', 'assets/interface/menu/en/bCreditos.png');
        game.load.image('langBen', 'assets/interface/menu/en/langButton.png');  
        game.load.image('mainTitlees', 'assets/interface/menu/en/mainTitle.png');        
        
        //Volumen
        game.load.image('mas', 'assets/interface/volumen/mas.png');        
        game.load.image('menos', 'assets/interface/volumen/menos.png');        
        game.load.image('sonido', 'assets/interface/volumen/sonido.png');
        
        //Endgame
        game.load.image('score', 'assets/interface/endgame/score.png');
        game.load.image('okB', 'assets/interface/endgame/ok.png');
        game.load.image('win', 'assets/interface/endgame/ganaste.png');
        game.load.image('tie', 'assets/interface/endgame/empataste.png');
        game.load.image('lose', 'assets/interface/endgame/perdiste.png');

        //Matchmaking
        game.load.image('buscando', 'assets/interface/matchmaking/buscando.png');
        game.load.image('searching', 'assets/interface/matchmaking/searching.png');

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
        game.load.image('flechaI', 'assets/interface/tutorial/flechaI.png');
        game.load.image('flechaD', 'assets/interface/tutorial/flechaD.png');
        game.load.image('barraL', 'assets/interface/tutorial/barraL.png');
        game.load.image('barraV', 'assets/interface/tutorial/barraV.png');
        game.load.image('escudo', 'assets/interface/tutorial/escudo.png');
        game.load.image('espada', 'assets/interface/tutorial/espada.png');
        game.load.image('logoT', 'assets/interface/tutorial/logo.png');
        game.load.image('repe', 'assets/interface/tutorial/repe.png');
        game.load.image('rueda', 'assets/interface/tutorial/rueda.png');
        game.load.image('screen', 'assets/interface/tutorial/screen.png');

        //Textos tutorial español
        game.load.image('titulo', 'assets/interface/tutorial/es/titulo.png');        
        game.load.image('texto1', 'assets/interface/tutorial/es/texto1.png');
        game.load.image('texto2', 'assets/interface/tutorial/es/texto2.png');
        game.load.image('texto3', 'assets/interface/tutorial/es/texto3.png');
        game.load.image('texto4', 'assets/interface/tutorial/es/texto4.png');
        game.load.image('texto5', 'assets/interface/tutorial/es/texto5.png');
        game.load.image('texto6', 'assets/interface/tutorial/es/texto6.png');
        game.load.image('texto7', 'assets/interface/tutorial/es/texto7.png');
        game.load.image('texto8', 'assets/interface/tutorial/es/texto8.png');
        game.load.image('texto9', 'assets/interface/tutorial/es/texto9.png');
        game.load.image('texto10', 'assets/interface/tutorial/es/texto10.png');
        game.load.image('texto11', 'assets/interface/tutorial/es/texto11.png');
        game.load.image('texto12', 'assets/interface/tutorial/es/texto12.png');
        game.load.image('texto13', 'assets/interface/tutorial/es/texto13.png');
        game.load.image('texto14', 'assets/interface/tutorial/es/texto14.png');

        //Textos tutorial inglés
        game.load.image('title', 'assets/interface/tutorial/en/titulo.png');        
        game.load.image('text1', 'assets/interface/tutorial/en/texto1.png');
        game.load.image('text2', 'assets/interface/tutorial/en/texto2.png');
        game.load.image('text3', 'assets/interface/tutorial/en/texto3.png');
        game.load.image('text4', 'assets/interface/tutorial/en/texto4.png');
        game.load.image('text5', 'assets/interface/tutorial/en/texto5.png');
        game.load.image('text6', 'assets/interface/tutorial/en/texto6.png');
        game.load.image('text7', 'assets/interface/tutorial/en/texto7.png');
        game.load.image('text8', 'assets/interface/tutorial/en/texto8.png');
        game.load.image('text9', 'assets/interface/tutorial/en/texto9.png');
        game.load.image('text10', 'assets/interface/tutorial/en/texto10.png');
        game.load.image('text11', 'assets/interface/tutorial/en/texto11.png');
        game.load.image('text12', 'assets/interface/tutorial/en/texto12.png');
        game.load.image('text13', 'assets/interface/tutorial/en/texto13.png');
        game.load.image('text14', 'assets/interface/tutorial/en/texto14.png');
        
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
        
        //Musica
        game.load.audio('menuMusic', 'assets/music/track_1_title_screen.mp3');
        game.load.audio('gameMusic', 'assets/music/track_1_main_game.mp3');
        game.load.audio('cardFlip', 'assets/music/card_flip_sound.ogg');
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