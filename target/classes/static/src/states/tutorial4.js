Schadenfreude.tutorial4State = function(game) {
    
}

Schadenfreude.tutorial4State.prototype = {

    init: function() {
        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **TUTORIAL 4** state");
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

            this.texto11 = game.add.sprite(0, 0, 'texto11');
            this.texto11.scale.setTo(1.2, 2);
            this.texto11.posX = 0;
            this.texto11.posY = 0;
            this.texto11.escalaX = 1;
            this.texto11.escalaY = 1;
            this.resizeBuffer.push(this.texto11);

            this.texto12 = game.add.sprite(0, 0, 'texto12');
            this.texto12.scale.setTo(1.2, 2);
            this.texto12.posX = 0;
            this.texto12.posY = 0;
            this.texto12.escalaX = 1;
            this.texto12.escalaY = 1;
            this.resizeBuffer.push(this.texto12);

            this.texto13 = game.add.sprite(0, 0, 'texto13');
            this.texto13.scale.setTo(1.2, 2);
            this.texto13.posX = 0;
            this.texto13.posY = 0;
            this.texto13.escalaX = 1;
            this.texto13.escalaY = 1;
            this.resizeBuffer.push(this.texto13);

            this.texto14 = game.add.sprite(0, 0, 'texto14');
            this.texto14.scale.setTo(1.2, 2);
            this.texto14.posX = 0;
            this.texto14.posY = 0;
            this.texto14.escalaX = 1;
            this.texto14.escalaY = 1;
            this.resizeBuffer.push(this.texto14);
        } else {

            this.title = game.add.sprite(0, 0, 'title');
            this.title.scale.setTo(1.2, 2);
            this.title.posX = 0;
            this.title.posY = 0;
            this.title.escalaX = 1;
            this.title.escalaY = 1;
            this.resizeBuffer.push(this.title);

            this.text11 = game.add.sprite(0, 0, 'text11');
            this.text11.scale.setTo(1.2, 2);
            this.text11.posX = 0;
            this.text11.posY = 0;
            this.text11.escalaX = 1;
            this.text11.escalaY = 1;
            this.resizeBuffer.push(this.text11);

            this.text12 = game.add.sprite(0, 0, 'text12');
            this.text12.scale.setTo(1.2, 2);
            this.text12.posX = 0;
            this.text12.posY = 0;
            this.text12.escalaX = 1;
            this.text12.escalaY = 1;
            this.resizeBuffer.push(this.text12);

            this.text13 = game.add.sprite(0, 0, 'text13');
            this.text13.scale.setTo(1.2, 2);
            this.text13.posX = 0;
            this.text13.posY = 0;
            this.text13.escalaX = 1;
            this.text13.escalaY = 1;
            this.resizeBuffer.push(this.text13);

            this.text14 = game.add.sprite(0, 0, 'text14');
            this.text14.scale.setTo(1.2, 2);
            this.text14.posX = 0;
            this.text14.posY = 0;
            this.text14.escalaX = 1;
            this.text14.escalaY = 1;
            this.resizeBuffer.push(this.text14);
        }

        this.escudo = game.add.sprite(0, 0, 'escudo');
        this.escudo.scale.setTo(1.2, 2);
        this.escudo.posX = 0;
        this.escudo.posY = 0;
        this.escudo.escalaX = 1;
        this.escudo.escalaY = 1;
        this.resizeBuffer.push(this.escudo);

        this.espada = game.add.sprite(0, 0, 'espada');
        this.espada.scale.setTo(1.2, 2);
        this.espada.posX = 0;
        this.espada.posY = 0;
        this.espada.escalaX = 1;
        this.espada.escalaY = 1;
        this.resizeBuffer.push(this.espada);

        this.repe = game.add.sprite(0, 0, 'repe');
        this.repe.scale.setTo(1.2, 2);
        this.repe.posX = 0;
        this.repe.posY = 0;
        this.repe.escalaX = 1;
        this.repe.escalaY = 1;
        this.resizeBuffer.push(this.repe);
        
        backB4 = game.add.button(0, 0, 'flechaI', backButton4, this);
        backB4.posX = 0;
        backB4.posY = 250;
        backB4.escalaX = 1;
        backB4.escalaY = 1;
        this.resizeBuffer.push(backB4);

        nextB4 = game.add.button(0, 0, 'flechaD', nextButton4, this);
        nextB4.posX = 1140;
        nextB4.posY = 250;
        nextB4.escalaX = 1;
        nextB4.escalaY = 1;
        this.resizeBuffer.push(nextB4);
        
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

function nextButton4() {
    game.state.start('menuState');    
}

function backButton4() {
    game.state.start('tutorial3State');    
}