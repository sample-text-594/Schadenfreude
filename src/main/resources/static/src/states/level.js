Schadenfreude.levelState = function(game) {

}
var hand = [];
var prevMouseX;
var prevMouseY;
var cardGrabbed = false;

var cardPreview;

var textoTurno;
var textoTiempo;
var textoStress;

Schadenfreude.levelState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **LEVEL** state");
		}
        
        game.scale.setResizeCallback(this.resize, this);
	},
	
	preload: function() {
		this.resizeBuffer = [];
	},

    create: function() {
        game.stage.backgroundColor = "4488AA";

        //Test
        var test = game.add.sprite(200, 200, 'ok');
        test.scale.setTo(0.1, 0.1);
        test.posX = 200;
        test.posY = 200;
        test.escalaX = 0.1;
        test.escalaY = 0.1;
        this.resizeBuffer.push(test);
        
        test = game.add.sprite(600, 200, 'ok');
        test.scale.setTo(0.1, 0.1);
        test.posX = 600;
        test.posY = 200;
        test.escalaX = 0.1;
        test.escalaY = 0.1;
        this.resizeBuffer.push(test);
        
        //Interface
        textoTurno = game.add.text(100, 100, "Ataque");
        textoTurno.posX = 100;
        textoTurno.posY = 100;
        textoTurno.escalaX = 1;
        textoTurno.escalaY = 1;
        this.resizeBuffer.push(textoTurno);
        
        textoTiempo = game.add.text(300, 100, "Mañana");
        textoTiempo.posX = 300;
        textoTiempo.posY = 100;
        textoTiempo.escalaX = 1;
        textoTiempo.escalaY = 1;
        this.resizeBuffer.push(textoTiempo);
        
        textoStress = game.add.text(500, 100, "Stress: 0");
        textoStress.posX = 500;
        textoStress.posY = 100;
        textoStress.escalaX = 1;
        textoStress.escalaY = 1;
        this.resizeBuffer.push(textoStress);

        //Hand
        for (var i = 0; i < 5; i++) {
            hand[i] = game.add.sprite(100 + i * 175, 600, 'carta' + game.global.player.hand[i] + game.global.lang);
            hand[i].scale.setTo(0.2, 0.2);
            hand[i].inputEnabled = true;
            hand[i].grabbed = false;
            
            hand[i].posX = 100 + i * 175;
            hand[i].posY = 600;
            hand[i].escalaX = 0.2;
            hand[i].escalaY = 0.2;
            this.resizeBuffer.push(hand[i]);
        }
        
        //Card Preview
        cardPreview = game.add.sprite(450, 100, 'blankcard');
        cardPreview.scale.setTo(0.4, 0.4);
        cardPreview.kill();
        cardPreview.posX = 450;
        cardPreview.posY = 100;
        cardPreview.escalaX = 0.4;
        cardPreview.escalaY = 0.4;
        this.resizeBuffer.push(cardPreview);

        game.input.mouse.capture = true;
        
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
        this.cardMovement();
        this.cardPreviewer();
    },
    
    cardMovement: function() {
        for (var i = 0; i < 5; i++) {
            if (hand[i].input.pointerOver() && game.input.activePointer.leftButton.isDown && cardGrabbed == false) {
                hand[i].grabbed = true;
                cardGrabbed = true;
            }

            if (hand[i].grabbed) {
                hand[i].x = hand[i].x + (game.input.mousePointer.x - prevMouseX);
                hand[i].posX = hand[i].x + (game.input.mousePointer.x - prevMouseX);
                hand[i].y = hand[i].y + (game.input.mousePointer.y - prevMouseY);
                hand[i].posY = hand[i].y + (game.input.mousePointer.y - prevMouseY);
            }

            if (game.input.activePointer.leftButton.isUp && hand[i].grabbed) {
                hand[i].grabbed = false;
                cardGrabbed = false;

                if ((hand[i].x - game.scale.width * 0.15) < 50 && (hand[i].x - game.scale.width * 0.15) > -50 && (hand[i].y - game.scale.height * 0.28) < 50 && (hand[i].y - game.scale.height * 0.28) > -50) {
                    hand[i].x = 200;
                    hand[i].posX = 200;
                    hand[i].y = 200;
                    hand[i].posY = 200;
                } else {
                    hand[i].x = (100 + i * 175);
                    hand[i].posX = (100 + i * 175);
                    hand[i].y = 600;
                    hand[i].posY = 600;
                }
                
                this.resize();
            }
        }

        prevMouseX = game.input.mousePointer.x;
        prevMouseY = game.input.mousePointer.y;
    },
    
    cardPreviewer: function() {
        if (cardPreview.alive) {
            cardPreview.kill();
        }
        
        for (var i = 0; i < 5; i++) {
            if (hand[i].input.pointerOver() && game.input.activePointer.leftButton.isUp) {
                cardPreview.loadTexture(hand[i].key);
                cardPreview.revive();
            }
        }
    }
}