Schadenfreude.levelState = function(game) {

}

Schadenfreude.levelState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **LEVEL** state");
		}
        
        game.scale.setResizeCallback(this.resize, this);
	},
	
	preload: function() {
		this.resizeBuffer = [];
		this.animationBuffer = [];
		this.state = "anim";
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
        this.textoTurno = game.add.text(100, 100, "Ataque");
        this.textoTurno.posX = 100;
        this.textoTurno.posY = 100;
        this.textoTurno.escalaX = 1;
        this.textoTurno.escalaY = 1;
        this.resizeBuffer.push(this.textoTurno);
        
        this.textoTiempo = game.add.text(300, 100, "Mañana");
        this.textoTiempo.posX = 300;
        this.textoTiempo.posY = 100;
        this.textoTiempo.escalaX = 1;
        this.textoTiempo.escalaY = 1;
        this.resizeBuffer.push(this.textoTiempo);
        
        this.textoStress = game.add.text(500, 100, "Stress: 0");
        this.textoStress.posX = 500;
        this.textoStress.posY = 100;
        this.textoStress.escalaX = 1;
        this.textoStress.escalaY = 1;
        this.resizeBuffer.push(this.textoStress);

        //Hand
        this.hand = [];
        this.cardGrabbed = false;
        for (var i = 0; i < 6; i++) {
        	if (game.global.player.hand[i] != -1) {
        		this.hand[i] = game.add.sprite(100 + i * 175, 600, 'carta' + game.global.player.hand[i] + game.global.lang);
            	this.hand[i].scale.setTo(0.2, 0.2);
            	this.hand[i].inputEnabled = true;
            	this.hand[i].grabbed = false;
                
            	this.hand[i].posX = 100 + i * 175;
            	this.hand[i].posY = 600;
            	this.hand[i].escalaX = 0.2;
            	this.hand[i].escalaY = 0.2;
                this.resizeBuffer.push(this.hand[i]);
        	} else {
        		this.hand[i] = -1;
        	}
        }
        
        //Card Backs
        this.cardBackAttack = game.add.sprite(200, 200, '0back');
        this.cardBackAttack.inputEnabled = true;
        this.cardBackAttack.scale.setTo(0.2, 0.2);
        this.cardBackAttack.kill();
        this.cardBackAttack.posX = 200;
        this.cardBackAttack.posY = 200;
        this.cardBackAttack.escalaX = 0.2;
        this.cardBackAttack.escalaY = 0.2;
        this.resizeBuffer.push(this.cardBackAttack);
        
        this.cardBackDefense = game.add.sprite(600, 200, '0back');
        this.cardBackDefense.inputEnabled = true;
        this.cardBackDefense.scale.setTo(0.2, 0.2);
        this.cardBackDefense.kill();
        this.cardBackDefense.posX = 600;
        this.cardBackDefense.posY = 200;
        this.cardBackDefense.escalaX = 0.2;
        this.cardBackDefense.escalaY = 0.2;
        this.resizeBuffer.push(this.cardBackDefense);
        
        //Card Preview
        this.cardPreview = game.add.sprite(450, 100, 'blankcard');
        this.cardPreview.scale.setTo(0.4, 0.4);
        this.cardPreview.kill();
        this.cardPreview.posX = 450;
        this.cardPreview.posY = 100;
        this.cardPreview.escalaX = 0.4;
        this.cardPreview.escalaY = 0.4;
        this.resizeBuffer.push(this.cardPreview);

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
		this.checkForUpdates();
    	
    	if (game.global.player.turn == 1) {
    		this.cardMovement();
    	}
    	
        this.cardPreviewer();
    },
    
    cardMovement: function() {
        for (var i = 0; i < 6; i++) {
        	if (this.hand[i] != -1) {
        		if (this.hand[i].input.pointerOver() && game.input.activePointer.leftButton.isDown && this.cardGrabbed == false) {
                	if (game.global.room.cardsAllowed.includes(game.global.player.handTypes[i])) {
                		this.hand[i].grabbed = true;
                    	this.cardGrabbed = true;
                	}
                }

                if (this.hand[i].grabbed) {
                	this.hand[i].x = this.hand[i].x + (game.input.mousePointer.x - this.prevMouseX);
                	this.hand[i].posX = this.hand[i].x + (game.input.mousePointer.x - this.prevMouseX);
                	this.hand[i].y = this.hand[i].y + (game.input.mousePointer.y - this.prevMouseY);
                	this.hand[i].posY = this.hand[i].y + (game.input.mousePointer.y - this.prevMouseY);
                }

                if (game.input.activePointer.leftButton.isUp && this.hand[i].grabbed) {
                	this.hand[i].grabbed = false;
                	this.cardGrabbed = false;
                	
                	if (game.global.player.side == "ataque") {
                		if ((this.hand[i].x - game.scale.width * 0.15) < 50 && (this.hand[i].x - game.scale.width * 0.15) > -50 && (this.hand[i].y - game.scale.height * 0.28) < 50 && (this.hand[i].y - game.scale.height * 0.28) > -50) {
                        	this.cardBackAttack.loadTexture(this.hand[i].key);
                        	this.cardBackAttack.revive();
                        	
                        	this.hand[i].destroy();
                        	this.hand[i] = -1;
                        	game.global.player.hand[i] = -1;
                        	
                        	game.global.player.turn = 0;
                        	this.playCard(i);
                        } else {
                        	this.hand[i].x = (100 + i * 175);
                        	this.hand[i].posX = (100 + i * 175);
                        	this.hand[i].y = 600;
                        	this.hand[i].posY = 600;
                        }
                	} else {
                		if ((this.hand[i].x - game.scale.width * 0.46) < 50 && (this.hand[i].x - game.scale.width * 0.46) > -50 && (this.hand[i].y - game.scale.height * 0.28) < 50 && (this.hand[i].y - game.scale.height * 0.28) > -50) {
                			this.cardBackDefense.loadTexture(this.hand[i].key);
                        	this.cardBackDefense.revive();
                        	
                        	this.hand[i].destroy();
                        	this.hand[i] = -1;
                        	game.global.player.hand[i] = -1;
                        	
                        	game.global.player.turn = 0;
                        	this.playCard(i);
                        } else {
                        	this.hand[i].x = (100 + i * 175);
                        	this.hand[i].posX = (100 + i * 175);
                        	this.hand[i].y = 600;
                        	this.hand[i].posY = 600;
                        }
                	}
                    
                    this.resize();
                }
        	}
        }

        this.prevMouseX = game.input.mousePointer.x;
        this.prevMouseY = game.input.mousePointer.y;
    },
    
    cardPreviewer: function() {
        if (this.cardPreview.alive) {
        	this.cardPreview.kill();
        }
        
        for (var i = 0; i < 6; i++) {
        	if (this.hand[i] != -1) {
        		if (this.hand[i].input.pointerOver() && this.hand[i].grabbed == false && game.input.activePointer.leftButton.isUp) {
                	this.cardPreview.loadTexture(this.hand[i].key);
                	this.cardPreview.revive();
                }
        	}
        }
        
        if (!this.cardPreview.alive && this.cardBackAttack.alive && this.cardBackAttack.input.pointerOver() && game.input.activePointer.leftButton.isUp) {
        	this.cardPreview.loadTexture(this.cardBackAttack.key);
        	this.cardPreview.revive();
        }
        
        if (!this.cardPreview.alive && this.cardBackDefense.alive && this.cardBackDefense.input.pointerOver() && game.input.activePointer.leftButton.isUp) {
        	this.cardPreview.loadTexture(this.cardBackDefense.key);
        	this.cardPreview.revive();
        }
    },
    
    playCard: function(index) {
    	let msg = new Object();
    	
    	msg.type = 'GAME';
    	msg.event = 'PLAY CARD';
    	msg.index = index;
    	
    	if (game.global.DEBUG_MODE) {
    		console.log("[DEBUG] Sending PLAY CARD message to server");
    	}
    	
    	game.global.socket.send(JSON.stringify(msg));
    },
    
    checkForUpdates: function() {
    	if (game.global.room.attackCardPlayed) {
    		this.cardBackAttack.loadTexture(game.global.room.cardsAllowed[0] + 'back');
    		this.cardBackAttack.revive();
    		game.global.room.attackCardPlayed = false;
    	}
    	
    	if (game.global.room.defenseCardPlayed) {
    		if (game.global.player.side == "ataque") {
    			this.cardBackDefense.loadTexture('carta' + game.global.room.defenseCard + game.global.lang);
        		this.cardBackDefense.revive();
    		} else {
    			this.cardBackAttack.loadTexture('carta' + game.global.room.attackCard + game.global.lang);
    		}
    		
    		this.textoStress.setText('Stress: ' + game.global.player.stress);
    		
    		game.global.room.defenseCardPlayed = false;
    	}
    	
    	if (game.global.room.beginTurn) {
    		if (game.global.player.side == "ataque") {
    			if (this.cardBackAttack.alive) {
        			this.cardBackAttack.kill();
        		}
    			if (this.cardBackDefense.alive) {
        			this.cardBackDefense.kill();
        		}
    		} else {
    			if (this.cardBackDefense.alive) {
        			this.cardBackDefense.kill();
        		}
    		}
    		for (var i = 0; i < 6; i++) {
    			if (game.global.player.hand[i] != -1 && this.hand[i] == -1) {
    				this.hand[i] = game.add.sprite(100 + i * 175, 600, 'carta' + game.global.player.hand[i] + game.global.lang);
    	        	this.hand[i].scale.setTo(0.2, 0.2);
    	        	this.hand[i].inputEnabled = true;
    	        	this.hand[i].grabbed = false;
    	            
    	        	this.hand[i].posX = 100 + i * 175;
    	        	this.hand[i].posY = 600;
    	        	this.hand[i].escalaX = 0.2;
    	        	this.hand[i].escalaY = 0.2;
    	            this.resizeBuffer.push(this.hand[i]);
				}
    		}
    		game.global.player.turn = 1;
    		this.resize();
    		game.global.room.beginTurn = false;
    	}
    },
}