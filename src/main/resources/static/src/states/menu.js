Schadenfreude.menuState = function(game) {

}

Schadenfreude.menuState.prototype = {

	init: function() {
        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **MENU** state");
		}
	},

    preload: function() {
        
    },

    create: function() {
        playB = game.add.button(100, 200, 'ok', playButton, this);
        settingsB = game.add.button(101, 370, 'ok', settingsButton, this);
        hiscoreB = game.add.button(345, 370, 'ok', hiscoreButton, this);
        credsB = game.add.button(605, 460, 'ok', credsButton, this);
        credsB.scale.setTo(0.5, 0.5);
        playB.scale.setTo(0.5, 0.5);
        settingsB.scale.setTo(0.5, 0.5);
        hiscoreB.scale.setTo(0.5, 0.5);
    },

    update: function() {

    }
}

function playButton() {
    game.state.start('matchmakingState');    
}

function hiscoreButton() {
    game.state.start('hiscoreState');    
}

function settingsButton() {
    game.state.start('settingsState');    
}

function credsButton() {
    game.state.start('creditsState');    
}