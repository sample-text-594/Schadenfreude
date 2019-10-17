Schadenfreude.creditsState = function(game) {

}

Schadenfreude.creditsState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **CREDITS** state");
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

        if(game.global.lang == "es"){
            creds = game.add.sprite(0, 0, 'creditosEs');
            creds.scale.setTo(1, 1);
            creds.posX = 430;
            creds.posY = 50;
            creds.escalaX = 1;
            creds.escalaY = 1;
            this.resizeBuffer.push(creds);
        } else {
            creds = game.add.sprite(0, 0, 'creditosEn');
            creds.scale.setTo(1, 1);
            creds.posX = 430;
            creds.posY = 50;
            creds.escalaX = 1;
            creds.escalaY = 1;
            this.resizeBuffer.push(creds);
        }

        a_game_by = game.add.sprite(0, 0, 'a_game_by');
        a_game_by.scale.setTo(1, 1);
        a_game_by.posX = 595;
        a_game_by.posY = 270;
        a_game_by.escalaX = 1;
        a_game_by.escalaY = 1;
        this.resizeBuffer.push(a_game_by);

        logo = game.add.sprite(0, 0, 'logo');
        logo.scale.setTo(1, 1);
        logo.posX = 565;
        logo.posY = 335;
        logo.escalaX = 1;
        logo.escalaY = 1;
        this.resizeBuffer.push(logo);

        mario = game.add.sprite(0, 0, 'mario');
        mario.scale.setTo(1, 1);
        mario.posX = 500;
        mario.posY = 500;
        mario.escalaX = 1;
        mario.escalaY = 1;
        this.resizeBuffer.push(mario);
        
        enrique = game.add.sprite(0, 0, 'enrique');
        enrique.scale.setTo(1, 1);
        enrique.posX = 700;
        enrique.posY = 492;
        enrique.escalaX = 1;
        enrique.escalaY = 1;
        this.resizeBuffer.push(enrique);
        
        david = game.add.sprite(0, 0, 'david');
        david.scale.setTo(1, 1);
        david.posX = 400;
        david.posY = 550;
        david.escalaX = 1;
        david.escalaY = 1;
        this.resizeBuffer.push(david);
        
        jorge = game.add.sprite(0, 0, 'jorge');
        jorge.scale.setTo(1, 1);
        jorge.posX = 590;
        jorge.posY = 550;
        jorge.escalaX = 1;
        jorge.escalaY = 1;
        this.resizeBuffer.push(jorge);

        alberto = game.add.sprite(0, 0, 'alberto');
        alberto.scale.setTo(1, 1);
        alberto.posX = 750;
        alberto.posY = 542;
        alberto.escalaX = 1;
        alberto.escalaY = 1;
        this.resizeBuffer.push(alberto);

        sandra = game.add.sprite(0, 0, 'sandra');
        sandra.scale.setTo(1, 1);
        sandra.posX = 480;
        sandra.posY = 600;
        sandra.escalaX = 1;
        sandra.escalaY = 1;
        this.resizeBuffer.push(sandra);

        juanje = game.add.sprite(0, 0, 'juanje');
        juanje.scale.setTo(1, 1);
        juanje.posX = 710;
        juanje.posY = 592;
        juanje.escalaX = 1;
        juanje.escalaY = 1;
        this.resizeBuffer.push(juanje);
        
        web = game.add.button(0, 0, 'web', webButton, this);
        web.scale.setTo(1, 1);
        web.posX = 1003;
        web.posY = 120;
        web.escalaX = 1;
        web.escalaY = 1;
        this.resizeBuffer.push(web);

        twitter = game.add.button(0, 0, 'twitter', twitterButton, this);
        twitter.scale.setTo(1, 1);
        twitter.posX = 1086;
        twitter.posY = 240;
        twitter.escalaX = 1;
        twitter.escalaY = 1;
        this.resizeBuffer.push(twitter);

        facebook = game.add.button(0, 0, 'facebook', fbButton, this);
        facebook.scale.setTo(1, 1);
        facebook.posX = 1117;
        facebook.posY = 360;
        facebook.escalaX = 1;
        facebook.escalaY = 1;
        this.resizeBuffer.push(facebook);

        youtube = game.add.button(0, 0, 'youtube', youtubeButton, this);
        youtube.scale.setTo(1, 1);
        youtube.posX = 1100;
        youtube.posY = 480;
        youtube.escalaX = 1;
        youtube.escalaY = 1;
        this.resizeBuffer.push(youtube);
        
        itchio = game.add.button(0, 0, 'itchio', itchioButton, this);
        itchio.scale.setTo(1, 1);
        itchio.posX = 1100;
        itchio.posY = 600;
        itchio.escalaX = 1;
        itchio.escalaY = 1;
        this.resizeBuffer.push(itchio);

        backB = game.add.button(0, 0, 'atras', backButton, this);
        backB.posX = 20;
        backB.posY = 630;
        backB.escalaX = 1;
        backB.escalaY = 1;
        this.resizeBuffer.push(backB);

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

function webButton() {
    window.open('https://sample-text-594.github.io/', "_blank");
}

function twitterButton() {
    window.open('https://twitter.com/games_sample', "_blank");
}

function fbButton() {
    window.open('https://www.facebook.com/sample.text.31586', "_blank");
}

function youtubeButton() {
    window.open('https://www.youtube.com/channel/UCFhqYqd-WOqeuwcu8t0_AMg', "_blank");
}

function itchioButton() {
    window.open('https://itch.io/profile/sampletext594', "_blank");
}