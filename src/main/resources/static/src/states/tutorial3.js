Schadenfreude.tutorial3State = function(game) {
    
}
    
Schadenfreude.tutorial3State.prototype = {

    init: function() {
        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **TUTORIAL 3** state");
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

            this.texto7 = game.add.sprite(0, 0, 'texto7');
            this.texto7.scale.setTo(1.2, 2);
            this.texto7.posX = 0;
            this.texto7.posY = 0;
            this.texto7.escalaX = 1;
            this.texto7.escalaY = 1;
            this.resizeBuffer.push(this.texto7);

            this.texto8 = game.add.sprite(0, 0, 'texto8');
            this.texto8.scale.setTo(1.2, 2);
            this.texto8.posX = 0;
            this.texto8.posY = 0;
            this.texto8.escalaX = 1;
            this.texto8.escalaY = 1;
            this.resizeBuffer.push(this.texto8);

            this.texto9 = game.add.sprite(0, 0, 'texto9');
            this.texto9.scale.setTo(1.2, 2);
            this.texto9.posX = 0;
            this.texto9.posY = 0;
            this.texto9.escalaX = 1;
            this.texto9.escalaY = 1;
            this.resizeBuffer.push(this.texto9);

            this.texto10 = game.add.sprite(0, 0, 'texto10');
            this.texto10.scale.setTo(1.2, 2);
            this.texto10.posX = 0;
            this.texto10.posY = 0;
            this.texto10.escalaX = 1;
            this.texto10.escalaY = 1;
            this.resizeBuffer.push(this.texto10);
        } else {

            this.title = game.add.sprite(0, 0, 'title');
            this.title.scale.setTo(1.2, 2);
            this.title.posX = 0;
            this.title.posY = 0;
            this.title.escalaX = 1;
            this.title.escalaY = 1;
            this.resizeBuffer.push(this.title);

            this.text7 = game.add.sprite(0, 0, 'text7');
            this.text7.scale.setTo(1.2, 2);
            this.text7.posX = 0;
            this.text7.posY = 0;
            this.text7.escalaX = 1;
            this.text7.escalaY = 1;
            this.resizeBuffer.push(this.text7);

            this.text8 = game.add.sprite(0, 0, 'text8');
            this.text8.scale.setTo(1.2, 2);
            this.text8.posX = 0;
            this.text8.posY = 0;
            this.text8.escalaX = 1;
            this.text8.escalaY = 1;
            this.resizeBuffer.push(this.text8);

            this.text9 = game.add.sprite(0, 0, 'text9');
            this.text9.scale.setTo(1.2, 2);
            this.text9.posX = 0;
            this.text9.posY = 0;
            this.text9.escalaX = 1;
            this.text9.escalaY = 1;
            this.resizeBuffer.push(this.text9);

            this.text10 = game.add.sprite(0, 0, 'text10');
            this.text10.scale.setTo(1.2, 2);
            this.text10.posX = 0;
            this.text10.posY = 0;
            this.text10.escalaX = 1;
            this.text10.escalaY = 1;
            this.resizeBuffer.push(this.text10);
        }

        this.logo = game.add.sprite(0, 0, 'logo');
        this.logo.scale.setTo(1.2, 2);
        this.logo.posX = 0;
        this.logo.posY = 0;
        this.logo.escalaX = 1;
        this.logo.escalaY = 1;
        this.resizeBuffer.push(this.logo);
        
        this.screen = game.add.sprite(0, 0, 'screen');
        this.screen.scale.setTo(1.2, 2);
        this.screen.posX = 0;
        this.screen.posY = 0;
        this.screen.escalaX = 1;
        this.screen.escalaY = 1;
        this.resizeBuffer.push(this.screen);

        backB3 = game.add.button(0, 0, 'flechaI', backButton3, this);
        backB3.posX = 0;
        backB3.posY = 250;
        backB3.escalaX = 1;
        backB3.escalaY = 1;
        this.resizeBuffer.push(backB3);

        nextB3 = game.add.button(0, 0, 'flechaD', nextButton3, this);
        nextB3.posX = 1140;
        nextB3.posY = 250;
        nextB3.escalaX = 1;
        nextB3.escalaY = 1;
        this.resizeBuffer.push(nextB3);
        
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

function nextButton3() {
    game.state.start('tutorial4State');    
}

function backButton3() {
    game.state.start('tutorial2State');    
}