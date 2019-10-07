Schadenfreude.levelState = function(game) {

}
var hand = [];
var prevMouseX;
var prevMouseY;
var cardGrabbed = false;

var cardPreview

Schadenfreude.levelState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **LEVEL** state");
		}
	},

    create: function() {
        game.stage.backgroundColor = "4488AA";

        for (var i = 0; i < 5; i++) {
            hand[i] = game.add.sprite((100 + i * 150) * game.global.scale, 600 * game.global.scale, 'blankcard');
            hand[i].scale.setTo(0.5*game.global.scale, 0.5*game.global.scale);
            hand[i].inputEnabled = true;
            hand[i].grabbed = false;
        }

        cardPreview = game.add.sprite(600, 200, 'blankcard');
        cardPreview.kill();

        game.input.mouse.capture = true;
    },

    update: function() {
        cardMovement();
        cardPreviewer();
    }
}

function cardMovement() {
    for (var i = 0; i < 5; i++) {
        if (hand[i].input.pointerOver() && game.input.activePointer.leftButton.onDown && cardGrabbed == false) {
            hand[i].grabbed = true;
            cardGrabbed = true;
        }

        if (hand[i].grabbed) {
            hand[i].x = hand[i].x + (game.input.mousePointer.x - prevMouseX);
            hand[i].y = hand[i].y + (game.input.mousePointer.y - prevMouseY);
        }

        if (game.input.activePointer.leftButton.isUp) {
            hand[i].grabbed = false;
            cardGrabbed = false;

            if (hand[i].x > 150 * game.global.scale && hand[i].x < 250 * game.global.scale && hand[i].y > 150 * game.global.scale && hand[i].y < 250 * game.global.scale) {
                hand[i].x = 200 * game.global.scale;
                hand[i].y = 200 * game.global.scale;
            } else {
                hand[i].x = (100 + i * 150) * game.global.scale;
                hand[i].y = 600 * game.global.scale;
            }
        }
    }

    prevMouseX = game.input.mousePointer.x;
    prevMouseY = game.input.mousePointer.y;
}

function cardPreviewer() {
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