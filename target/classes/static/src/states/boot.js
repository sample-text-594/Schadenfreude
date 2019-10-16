var Schadenfreude = {}

Schadenfreude.bootState = function(game) {

}

Schadenfreude.bootState.prototype = {

	init : function() {
		if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **BOOT** state");
		}
	},

	preload : function() {
		this.game.renderer.renderSession.roundPixels = true
		this.time.desiredFps = game.global.FPS
	},

	create : function() {
		game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
	},

	update : function() {
		if (typeof game.global.socket !== 'undefined') {
			game.state.start('preloadState')
		}
	}
}