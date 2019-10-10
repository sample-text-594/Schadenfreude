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

        //Test
        var test = game.add.sprite(200 * game.global.scale, 200 * game.global.scale, 'ok');
        test.scale.setTo(game.global.scale * 0.1, game.global.scale * 0.1);

        for (var i = 0; i < 5; i++) {
            hand[i] = game.add.sprite((100 + i * 175) * game.global.scale, 800 * game.global.scale, 'carta' + game.global.player.hand[i] + game.global.lang);
            hand[i].scale.setTo(0.2 * game.global.scale, 0.2 * game.global.scale);
            hand[i].inputEnabled = true;
            hand[i].grabbed = false;
        }

        cardPreview = game.add.sprite(600 * game.global.scale, 200 * game.global.scale, 'blankcard');
        cardPreview.scale.setTo(0.5 * game.global.scale, 0.5 * game.global.scale);
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
        if (hand[i].input.pointerOver() && game.input.activePointer.leftButton.isDown && cardGrabbed == false) {
            hand[i].grabbed = true;
            cardGrabbed = true;
        }

        if (hand[i].grabbed) {
            hand[i].x = hand[i].x + (game.input.mousePointer.x - prevMouseX);
            hand[i].y = hand[i].y + (game.input.mousePointer.y - prevMouseY);
        }

        if (game.input.activePointer.leftButton.isUp && hand[i].grabbed) {
            hand[i].grabbed = false;
            cardGrabbed = false;

            if (hand[i].x > 150 * game.global.scale && hand[i].x < 250 * game.global.scale && hand[i].y > 150 * game.global.scale && hand[i].y < 250 * game.global.scale) {
                hand[i].x = 200 * game.global.scale;
                hand[i].y = 200 * game.global.scale;
            } else {
                hand[i].x = (100 + i * 175) * game.global.scale;
                hand[i].y = 800 * game.global.scale;
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