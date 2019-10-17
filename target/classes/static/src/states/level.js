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
	},

    create: function() {
        //Interface
    	this.fondo = game.add.sprite(0, 0, 'fondo');
    	this.fondo.scale.setTo(2, 2);
        this.fondo.posX = 0;
        this.fondo.posY = 0;
        this.fondo.escalaX = 2;
        this.fondo.escalaY = 2;
        this.resizeBuffer.push(this.fondo);
        
        this.barraEstres = game.add.sprite(50, 50, 'barraEstres', 0);
        this.barraEstres.posX = 50;
        this.barraEstres.posY = 50;
        this.barraEstres.escalaX = 1;
        this.barraEstres.escalaY = 1;
        this.resizeBuffer.push(this.barraEstres);
        
        this.botonPasar = game.add.button(545, 100, 'pasarB', function() {this.playCard(-1)}, this);
        this.botonPasar.posX = 545;
        this.botonPasar.posY = 100;
        this.botonPasar.escalaX = 1;
        this.botonPasar.escalaY = 1;
        this.resizeBuffer.push(this.botonPasar);
        this.botonPasar.inputEnabled = false;
        
        if (game.global.player.side == "ataque") {
        	this.marcaEspada = game.add.sprite(400, 200, 'marcaEspadaV');
        } else {
        	this.marcaEspada = game.add.sprite(400, 200, 'marcaEspada');
        }
        this.marcaEspada.scale.setTo(0.95, 0.95);
        this.marcaEspada.posX = 400;
        this.marcaEspada.posY = 200;
        this.marcaEspada.escalaX = 0.95;
        this.marcaEspada.escalaY = 0.95;
        this.resizeBuffer.push(this.marcaEspada);
        
        if (game.global.player.side == "defensa") {
        	this.marcaEscudo = game.add.sprite(653, 200, 'marcaEscudoV');
        } else {
        	this.marcaEscudo = game.add.sprite(653, 200, 'marcaEscudo');
        }
        this.marcaEscudo.scale.setTo(0.95, 0.95);
        this.marcaEscudo.posX = 653;
        this.marcaEscudo.posY = 200;
        this.marcaEscudo.escalaX = 0.95;
        this.marcaEscudo.escalaY = 0.95;
        this.resizeBuffer.push(this.marcaEscudo);
        
        this.ruedaHoras = game.add.sprite(1314, 314, 'ruedaHoras');
        this.marcaEscudo.scale.setTo(0.7, 0.7);
        this.ruedaHoras.anchor.setTo(0.5, 0.5);
        this.ruedaHoras.posX = 1314;
        this.ruedaHoras.posY = 314;
        this.ruedaHoras.escalaX = 0.7;
        this.ruedaHoras.escalaY = 0.7;
        this.resizeBuffer.push(this.ruedaHoras);
        
        this.ruedaHoras.counter = 0;

        //Hand
        this.hand = [];
        this.cardGrabbed = false;
        for (var i = 0; i < 6; i++) {
        	if (game.global.player.hand[i] != -1) {
        		this.hand[i] = game.add.sprite(150 + i * 175, 600, 'carta' + game.global.player.hand[i] + game.global.lang);
            	this.hand[i].scale.setTo(0.2, 0.2);
            	this.hand[i].grabbed = false;
            	this.hand[i].index = i;
            	this.hand[i].inputEnabled = true;
                
            	this.hand[i].posX = 150 + i * 175;
            	this.hand[i].posY = 600;
            	this.hand[i].escalaX = 0.2;
            	this.hand[i].escalaY = 0.2;
                this.resizeBuffer.push(this.hand[i]);
                
                this.hand[i].anim = game.add.sprite(150 + i * 175, 600, 'cartaAnim', 0);
                this.hand[i].anim.scale.setTo(0.2, 0.2);
            	this.hand[i].anim.animations.add('reveal');
            	this.hand[i].anim.animations.play('reveal', 5, false, true);
            	this.hand[i].anim.posX = 150 + i * 175;
            	this.hand[i].anim.posY = 600;
            	this.hand[i].anim.escalaX = 0.2;
            	this.hand[i].anim.escalaY = 0.2;
                this.resizeBuffer.push(this.hand[i].anim);
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
        this.cardPreview = game.add.sprite(450, 100, '-1back');
        this.cardPreview.scale.setTo(0.4, 0.4);
        this.cardPreview.kill();
        this.cardPreview.posX = 450;
        this.cardPreview.posY = 100;
        this.cardPreview.escalaX = 0.4;
        this.cardPreview.escalaY = 0.4;
        this.resizeBuffer.push(this.cardPreview);

        game.input.mouse.capture = true;
        
        this.resize();
        
        this.beginTurn = false;
        this.beginTurnWait = 50;
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
    	if (game.global.room.beginTurn) {
    		if (this.beginTurnWait > 0) {
    			this.beginTurnWait--;
    		} else {
    			this.beginTurnWait = 50;
    			game.global.room.beginTurn = false;
    			this.beginTurn = true;
    		}
    	}
    	if (game.global.room.timeRotate) {
    		if (this.ruedaHoras.counter < 90) {
    			this.ruedaHoras.angle -= 1;
    			this.ruedaHoras.counter++;
    		} else {
    			this.ruedaHoras.counter = 0;
    			game.global.room.timeRotate = false;
    		}
    	}
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
            	
            	game.global.player.turn = 0;
            	this.playCard(sprite.index);
            } else {
            	sprite.x = (150 + sprite.index * 175);
            	sprite.posX = (150 + sprite.index * 175);
            	sprite.y = 600;
            	sprite.posY = 600;
            }
    	} else {
    		if ((sprite.x - game.scale.width * 0.513) < 50 && (sprite.x - game.scale.width * 0.513) > -50 && (sprite.y - game.scale.height * 0.283) < 50 && (sprite.y - game.scale.height * 0.283) > -50) {
    			this.cardBackDefense.loadTexture(sprite.key);
            	this.cardBackDefense.revive();
            	
            	sprite.destroy();
            	this.hand[sprite.index] = -1;
            	
            	game.global.player.turn = 0;
            	this.playCard(sprite.index);
            } else {
            	sprite.x = (150 + sprite.index * 175);
            	sprite.posX = (150 + sprite.index * 175);
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
    	let sound = game.add.audio('cardFlip');
    	sound.volume = game.global.sound/5;
    	sound.play();
    	
    	this.botonPasar.inputEnabled = false;
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
    	
    	if (game.global.player.hand[index] == '50a' || game.global.player.hand[index] == '50b') {
    		msg.elecciones = true;
    	} else {
    		msg.elecciones = false;
    	}
    	
    	game.global.player.hand[index] = -1;
    	
    	if (game.global.DEBUG_MODE) {
    		console.log("[DEBUG] Sending PLAY CARD message to server");
    	}
    	
    	game.global.socket.send(JSON.stringify(msg));
    },
    
    checkForUpdates: function() {
    	if (game.global.room.attackCardPlayed) {
    		this.cardBackAttack.loadTexture(game.global.room.cardsAllowed[0] + 'back');
    		if (!this.cardBackAttack.alive) {
    			this.cardBackAttack.revive();
    		}
    		game.global.room.attackCardPlayed = false;
    	}
    	
    	if (game.global.room.defenseCardPlayed) {
    		if (game.global.player.side == "ataque") {
    			if (game.global.room.defenseCard != -1) {
    				this.cardBackDefense.loadTexture('carta' + game.global.room.defenseCard + game.global.lang);
            		this.cardBackDefense.revive();
    			}
    		} else {
    			if (game.global.room.attackCard != -1) {
    				this.cardBackAttack.loadTexture('carta' + game.global.room.attackCard + game.global.lang);
    			}
    		}
    		
    		this.barraEstres.frame = game.global.player.stress;
    		
    		game.global.room.defenseCardPlayed = false;
    	}
    	
    	if (this.beginTurn) {
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
    				this.hand[i] = game.add.sprite(150 + i * 175, 600, 'carta' + game.global.player.hand[i] + game.global.lang);
    	        	this.hand[i].scale.setTo(0.2, 0.2);
    	        	this.hand[i].inputEnabled = true;
    	        	this.hand[i].grabbed = false;
    	        	this.hand[i].index = i;
    	        	
    	        	if (game.global.room.cardsAllowed.includes(game.global.player.handTypes[i])) {
                		this.hand[i].input.enableDrag();
                    	this.hand[i].events.onDragStart.add(this.onDragStart, this);
                    	this.hand[i].events.onDragStop.add(this.onDragStop, this);
                	}
    	            
    	        	this.hand[i].posX = 150 + i * 175;
    	        	this.hand[i].posY = 600;
    	        	this.hand[i].escalaX = 0.2;
    	        	this.hand[i].escalaY = 0.2;
    	            this.resizeBuffer.push(this.hand[i]);
    	            
    	            if (this.hand[i].anim == undefined) {
    	            	this.hand[i].anim = game.add.sprite(150 + i * 175, 600, 'cartaAnim', 0);
                        this.hand[i].anim.scale.setTo(0.2, 0.2);
                    	this.hand[i].anim.animations.add('reveal');
                    	this.hand[i].anim.posX = 150 + i * 175;
                    	this.hand[i].anim.posY = 600;
                    	this.hand[i].anim.escalaX = 0.2;
                    	this.hand[i].anim.escalaY = 0.2;
                        this.resizeBuffer.push(this.hand[i].anim);
    	            } else {
    	            	this.hand[i].anim.revive();
    	            }
    	            
                	this.hand[i].anim.animations.play('reveal', 5, false, true);
                	
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
    		this.beginTurn = false;
    		this.botonPasar.inputEnabled = true;
    	}
    	
    	if (game.global.room.reDraw) {
    		for (var i = 0; i < 6; i++) {
    			if (this.hand[i] != -1) {
    				this.hand[i].loadTexture('carta' + game.global.player.hand[i] + game.global.lang);
    			}
    		}
    		
    		if (game.global.player.side == "ataque") {
    			this.marcaEspada.loadTexture('marcaEspadaV');
    			this.marcaEscudo.loadTexture('marcaEscudo');
    		} else {
    			this.marcaEspada.loadTexture('marcaEspada');
    			this.marcaEscudo.loadTexture('marcaEscudoV');
    		}
    		
    		this.ruedaHoras.angle = 0;
    		this.barraEstres.frame = game.global.player.stress;
    		
    		game.global.room.reDraw = false;
    	}
    },
}