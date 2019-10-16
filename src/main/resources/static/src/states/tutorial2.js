Schadenfreude.tutorial2State = function(game) {
    
}
    
Schadenfreude.tutorial2State.prototype = {

    init: function() {
        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **TUTORIAL 2** state");
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

            this.texto4 = game.add.sprite(0, 0, 'texto4');
            this.texto4.scale.setTo(1.2, 2);
            this.texto4.posX = 0;
            this.texto4.posY = 0;
            this.texto4.escalaX = 1;
            this.texto4.escalaY = 1;
            this.resizeBuffer.push(this.texto4);

            this.texto5 = game.add.sprite(0, 0, 'texto5');
            this.texto5.scale.setTo(1.2, 2);
            this.texto5.posX = 0;
            this.texto5.posY = 0;
            this.texto5.escalaX = 1;
            this.texto5.escalaY = 1;
            this.resizeBuffer.push(this.texto5);

            this.texto6 = game.add.sprite(0, 0, 'texto6');
            this.texto6.scale.setTo(1.2, 2);
            this.texto6.posX = 0;
            this.texto6.posY = 0;
            this.texto6.escalaX = 1;
            this.texto6.escalaY = 1;
            this.resizeBuffer.push(this.texto6);
        } else {

            this.title = game.add.sprite(0, 0, 'title');
            this.title.scale.setTo(1.2, 2);
            this.title.posX = 0;
            this.title.posY = 0;
            this.title.escalaX = 1;
            this.title.escalaY = 1;
            this.resizeBuffer.push(this.title);

            this.text4 = game.add.sprite(0, 0, 'text4');
            this.text4.scale.setTo(1.2, 2);
            this.text4.posX = 0;
            this.text4.posY = 0;
            this.text4.escalaX = 1;
            this.text4.escalaY = 1;
            this.resizeBuffer.push(this.text4);

            this.text5 = game.add.sprite(0, 0, 'text5');
            this.text5.scale.setTo(1.2, 2);
            this.text5.posX = 0;
            this.text5.posY = 0;
            this.text5.escalaX = 1;
            this.text5.escalaY = 1;
            this.resizeBuffer.push(this.text5);

            this.text6 = game.add.sprite(0, 0, 'text6');
            this.text6.scale.setTo(1.2, 2);
            this.text6.posX = 0;
            this.text6.posY = 0;
            this.text6.escalaX = 1;
            this.text6.escalaY = 1;
            this.resizeBuffer.push(this.text6);
        }

        this.rueda = game.add.sprite(0, 0, 'rueda');
        this.rueda.scale.setTo(1.2, 2);
        this.rueda.posX = 0;
        this.rueda.posY = 0;
        this.rueda.escalaX = 1;
        this.rueda.escalaY = 1;
        this.resizeBuffer.push(this.rueda);

        backB2 = game.add.button(0, 0, 'flechaI', backButton2, this);
        backB2.posX = 0;
        backB2.posY = 250;
        backB2.escalaX = 1;
        backB2.escalaY = 1;
        this.resizeBuffer.push(backB2);

        nextB2 = game.add.button(0, 0, 'flechaD', nextButton2, this);
        nextB2.posX = 1140;
        nextB2.posY = 250;
        nextB2.escalaX = 1;
        nextB2.escalaY = 1;
        this.resizeBuffer.push(nextB2);
        
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

function nextButton2() {
    game.state.start('tutorial3State');    
}

function backButton2() {
    game.state.start('tutorial1State');    
}