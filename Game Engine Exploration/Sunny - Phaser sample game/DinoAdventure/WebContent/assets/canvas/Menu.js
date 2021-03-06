// Generated by Phaser Editor v1.4.0 (Phaser v2.6.2)


/**
 * Menu.
 */
function Menu() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Menu_proto = Object.create(Phaser.State.prototype);
Menu.prototype = Menu_proto;
Menu.prototype.constructor = Menu;

Menu.prototype.init = function () {
	
};

Menu.prototype.preload = function () {
	
	this.load.pack('preloader', 'assets/pack.json');
	
};

Menu.prototype.create = function () {
	this.add.sprite(-320, -33, 'wall-empty');
	
	this.add.sprite(459, -37, 'window');
	
	var _playBtn = this.add.sprite(285, 217, 'play');
	
	this.add.tileSprite(-315, 546, 1509, 74, 'atlas1', 'platform2');
	
	this.add.sprite(42, 267, 'atlas1', 'wall-hole');
	
	this.add.sprite(629, 439, 'atlas1', 'flor');
	
	this.add.sprite(60, 405, 'dino', 3);
	
	// public fields
	
	this.fPlayBtn = _playBtn;
	// user code
	this.initObjects();
	
};

/* --- end generated code --- */

Menu.prototype.initObjects = function() {
	this.add.tween(this.fPlayBtn).to({
		y : this.fPlayBtn.y - 10
	}, 1000, "Linear", true, 0, Number.MAX_VALUE, true);
};

Menu.prototype.update = function() {
	if (this.input.activePointer.isDown) {
		this.game.state.start("Level1");
	}
};
