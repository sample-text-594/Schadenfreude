Schadenfreude.tutorial1State = function(game) {

}

Schadenfreude.tutorial1State.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **TUTORIAL 1** state");
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

            this.titulo = game.add.sprite(0, 0, 'titulo');
            this.titulo.scale.setTo(1.2, 2);
            this.titulo.posX = 0;
            this.titulo.posY = 0;
            this.titulo.escalaX = 1;
            this.titulo.escalaY = 1;
            this.resizeBuffer.push(this.titulo);

            this.texto1 = game.add.sprite(0, 0, 'texto1');
            this.texto1.scale.setTo(1.2, 2);
            this.texto1.posX = 0;
            this.texto1.posY = 0;
            this.texto1.escalaX = 1;
            this.texto1.escalaY = 1;
            this.resizeBuffer.push(this.texto1);

            this.texto2 = game.add.sprite(0, 0, 'texto2');
            this.texto2.scale.setTo(1.2, 2);
            this.texto2.posX = 0;
            this.texto2.posY = 0;
            this.texto2.escalaX = 1;
            this.texto2.escalaY = 1;
            this.resizeBuffer.push(this.texto2);

            this.texto3 = game.add.sprite(0, 0, 'texto3');
            this.texto3.scale.setTo(1.2, 2);
            this.texto3.posX = 0;
            this.texto3.posY = 0;
            this.texto3.escalaX = 1;
            this.texto3.escalaY = 1;
            this.resizeBuffer.push(this.texto3);
        } else {

            this.title = game.add.sprite(0, 0, 'title');
            this.title.scale.setTo(1.2, 2);
            this.title.posX = 0;
            this.title.posY = 0;
            this.title.escalaX = 1;
            this.title.escalaY = 1;
            this.resizeBuffer.push(this.title);

            this.text1 = game.add.sprite(0, 0, 'text1');
            this.text1.scale.setTo(1.2, 2);
            this.text1.posX = 0;
            this.text1.posY = 0;
            this.text1.escalaX = 1;
            this.text1.escalaY = 1;
            this.resizeBuffer.push(this.text1);

            this.text2 = game.add.sprite(0, 0, 'text2');
            this.text2.scale.setTo(1.2, 2);
            this.text2.posX = 0;
            this.text2.posY = 0;
            this.text2.escalaX = 1;
            this.text2.escalaY = 1;
            this.resizeBuffer.push(this.text2);

            this.text3 = game.add.sprite(0, 0, 'text3');
            this.text3.scale.setTo(1.2, 2);
            this.text3.posX = 0;
            this.text3.posY = 0;
            this.text3.escalaX = 1;
            this.text3.escalaY = 1;
            this.resizeBuffer.push(this.text3);
        }

        this.barraL = game.add.sprite(0, 0, 'barraL');
        this.barraL.scale.setTo(1.2, 2);
        this.barraL.posX = 0;
        this.barraL.posY = 0;
        this.barraL.escalaX = 1;
        this.barraL.escalaY = 1;
        this.resizeBuffer.push(this.barraL);

        this.barraV = game.add.sprite(0, 0, 'barraV');
        this.barraV.scale.setTo(1.2, 2);
        this.barraV.posX = 0;
        this.barraV.posY = 0;
        this.barraV.escalaX = 1;
        this.barraV.escalaY = 1;
        this.resizeBuffer.push(this.barraV);

        backB1 = game.add.button(0, 0, 'flechaI', backButton1, this);
        backB1.posX = 0;
        backB1.posY = 250;
        backB1.escalaX = 1;
        backB1.escalaY = 1;
        this.resizeBuffer.push(backB1);

        nextB1 = game.add.button(0, 0, 'flechaD', nextButton1, this);
        nextB1.posX = 1140;
        nextB1.posY = 250;
        nextB1.escalaX = 1;
        nextB1.escalaY = 1;
        this.resizeBuffer.push(nextB1);
        
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

function backButton1() {
    game.state.start('menuState');    
}

function nextButton1() {
    game.state.start('tutorial2State');    
}