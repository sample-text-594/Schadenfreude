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
        
        //Interface
        this.textoTurno = game.add.text(100, 100, "ataque");
        this.textoTurno.posX = 100;
        this.textoTurno.posY = 100;
        this.textoTurno.escalaX = 1;
        this.textoTurno.escalaY = 1;
        this.resizeBuffer.push(this.textoTurno);
        
        this.textoTiempo = game.add.text(300, 100, "mañana");
        this.textoTiempo.posX = 300;
        this.textoTiempo.posY = 100;
        this.textoTiempo.escalaX = 1;
        this.textoTiempo.escalaY = 1;
        this.resizeBuffer.push(this.textoTiempo);
        
        this.textoStress = game.add.text(500, 100, "stress: 0");
        this.textoStress.posX = 500;
        this.textoStress.posY = 100;
        this.textoStress.escalaX = 1;
        this.textoStress.escalaY = 1;
        this.resizeBuffer.push(this.textoStress);
        
        this.marcas = game.add.sprite(400, 200, 'marcas');
        this.marcas.scale.setTo(0.98, 0.96);
        this.marcas.posX = 400;
        this.marcas.posY = 200;
        this.marcas.escalaX = 0.98;
        this.marcas.escalaY = 0.96;
        this.resizeBuffer.push(this.marcas);
        
        this.espada = game.add.sprite(445, 245, 'espada');
        this.espada.scale.setTo(0.5, 0.5);
        this.espada.posX = 445;
        this.espada.posY = 245;
        this.espada.escalaX = 0.5;
        this.espada.escalaY = 0.5;
        this.resizeBuffer.push(this.espada);
        
        this.escudo = game.add.sprite(700, 250, 'escudo');
        this.escudo.scale.setTo(0.5, 0.5);
        this.escudo.posX = 700;
        this.escudo.posY = 250;
        this.escudo.escalaX = 0.5;
        this.escudo.escalaY = 0.5;
        this.resizeBuffer.push(this.escudo);
        
        this.ruedaHoras = game.add.sprite(1000, 100, 'ruedaHoras');
        this.ruedaHoras.posX = 1000;
        this.ruedaHoras.posY = 100;
        this.ruedaHoras.escalaX = 1;
        this.ruedaHoras.escalaY = 1;
        this.resizeBuffer.push(this.ruedaHoras);

        //Hand
        this.hand = [];
        this.cardGrabbed = false;
        for (var i = 0; i < 6; i++) {
        	if (game.global.player.hand[i] != -1) {
        		this.hand[i] = game.add.sprite(100 + i * 175, 600, 'carta' + game.global.player.hand[i] + game.global.lang);
            	this.hand[i].scale.setTo(0.2, 0.2);
            	this.hand[i].grabbed = false;
            	this.hand[i].index = i;
            	this.hand[i].inputEnabled = true;
                
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
        this.cardBackAttack = game.add.sprite(404, 204, '0back');
        this.cardBackAttack.inputEnabled = true;
        this.cardBackAttack.scale.setTo(0.2, 0.2);
        this.cardBackAttack.kill();
        this.cardBackAttack.posX = 404;
        this.cardBackAttack.posY = 204;
        this.cardBackAttack.escalaX = 0.2;
        this.cardBackAttack.escalaY = 0.2;
        this.resizeBuffer.push(this.cardBackAttack);
        
        this.cardBackDefense = game.add.sprite(657, 204, '0back');
        this.cardBackDefense.inputEnabled = true;
        this.cardBackDefense.scale.setTo(0.2, 0.2);
        this.cardBackDefense.kill();
        this.cardBackDefense.posX = 657;
        this.cardBackDefense.posY = 204;
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
    	
        this.cardPreviewer();
    },
    
    onDragStart: function(sprite, pointer) {
    	sprite.grabbed = true;
    },
    
    onDragStop: function(sprite, pointer) {
    	sprite.grabbed = false;
    	
    	if (game.global.player.side == "ataque") {
    		if ((sprite.x - game.scale.width * 0.315) < 50 && (sprite.x - game.scale.width * 0.315) > -50 && (sprite.y - game.scale.height * 0.283) < 50 && (sprite.y - game.scale.height * 0.283) > -50) {
            	this.cardBackAttack.loadTexture(sprite.key);
            	this.cardBackAttack.revive();
            	
            	sprite.destroy();
            	this.hand[sprite.index] = -1;
            	game.global.player.hand[sprite.index] = -1;
            	
            	game.global.player.turn = 0;
            	this.playCard(sprite.index);
            } else {
            	sprite.x = (100 + sprite.index * 175);
            	sprite.posX = (100 + sprite.index * 175);
            	sprite.y = 600;
            	sprite.posY = 600;
            }
    	} else {
    		if ((sprite.x - game.scale.width * 0.513) < 50 && (sprite.x - game.scale.width * 0.513) > -50 && (sprite.y - game.scale.height * 0.283) < 50 && (sprite.y - game.scale.height * 0.283) > -50) {
    			this.cardBackDefense.loadTexture(sprite.key);
            	this.cardBackDefense.revive();
            	
            	sprite.destroy();
            	this.hand[sprite.index] = -1;
            	game.global.player.hand[sprite.index] = -1;
            	
            	game.global.player.turn = 0;
            	this.playCard(sprite.index);
            } else {
            	sprite.x = (100 + sprite.index * 175);
            	sprite.posX = (100 + sprite.index * 175);
            	sprite.y = 600;
            	sprite.posY = 600;
            }
    	}
        
        this.resize();
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
    	for (var i = 0; i < 6; i++) {
			if (this.hand[i] != -1 && this.hand[i].input.draggable) {
				this.hand[i].input.disableDrag();
            	this.hand[i].events.onDragStart.removeAll();
            	this.hand[i].events.onDragStop.removeAll();
			}
		}
    	
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
    		this.textoTiempo.setText(game.global.room.time);
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
    	        	this.hand[i].index = i;
    	        	
    	        	if (game.global.room.cardsAllowed.includes(game.global.player.handTypes[i])) {
                		this.hand[i].input.enableDrag();
                    	this.hand[i].events.onDragStart.add(this.onDragStart, this);
                    	this.hand[i].events.onDragStop.add(this.onDragStop, this);
                	}
    	            
    	        	this.hand[i].posX = 100 + i * 175;
    	        	this.hand[i].posY = 600;
    	        	this.hand[i].escalaX = 0.2;
    	        	this.hand[i].escalaY = 0.2;
    	            this.resizeBuffer.push(this.hand[i]);
				} else if (this.hand[i] != -1) {
					if (game.global.room.cardsAllowed.includes(game.global.player.handTypes[i])) {
						if (!this.hand[i].input.draggable) {
							this.hand[i].input.enableDrag();
	                    	this.hand[i].events.onDragStart.add(this.onDragStart, this);
	                    	this.hand[i].events.onDragStop.add(this.onDragStop, this);
						}
                	} else {
                		if (this.hand[i].input.draggable) {
							this.hand[i].input.disableDrag();
	                    	this.hand[i].events.onDragStart.removeAll();
	                    	this.hand[i].events.onDragStop.removeAll();
						}
                	}
				}
    		}
    		game.global.player.turn = 1;
    		this.resize();
    		game.global.room.beginTurn = false;
    	}
    },
}