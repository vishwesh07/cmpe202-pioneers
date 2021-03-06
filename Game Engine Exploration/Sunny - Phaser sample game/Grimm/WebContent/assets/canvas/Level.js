// Generated by Phaser Editor v1.4.0 (Phaser v2.6.2)


/**
 * Level.
 */
function Level() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level_proto = Object.create(Phaser.State.prototype);
Level.prototype = Level_proto;
Level.prototype.constructor = Level;

Level.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.game.renderer.renderSession.roundPixels = true;
	this.physics.startSystem(Phaser.Physics.ARCADE);
	
	// from User Code dialog
	this.myInit();
	
};

Level.prototype.preload = function () {
	
	this.load.pack('level', 'assets/pack.json');
	
};

Level.prototype.create = function () {
	this.add.tileSprite(0, 32, 1216, 176, 'tiles', 18);
	
	var _lava = this.add.physicsGroup(Phaser.Physics.ARCADE);
	
	this.add.tileSprite(896, 176, 176, 96, 'tiles', 12, _lava);
	
	this.add.tileSprite(464, 208, 96, 64, 'tiles', 12, _lava);
	
	var _bricks = this.add.group();
	
	this.add.tileSprite(1104, 0, 128, 32, 'tiles', 34, _bricks);
	
	this.add.tileSprite(448, 0, 656, 48, 'tiles', 34, _bricks);
	
	this.add.tileSprite(16, 96, 416, 16, 'tiles', 1, _bricks);
	
	this.add.tileSprite(48, 192, 416, 16, 'tiles', 25, _bricks);
	
	this.add.sprite(32, 192, 'tiles', 33, _bricks);
	
	this.add.sprite(16, 192, 'tiles', 25, _bricks);
	
	this.add.tileSprite(64, 112, 96, 16, 'tiles', 8, _bricks);
	
	this.add.sprite(176, 64, 'tiles', 33, _bricks);
	
	this.add.tileSprite(288, 112, 96, 16, 'tiles', 8, _bricks);
	
	this.add.sprite(304, 96, 'tiles', 33, _bricks);
	
	this.add.tileSprite(448, 80, 80, 16, 'tiles', 1, _bricks);
	
	this.add.sprite(448, 96, 'tiles', 8, _bricks);
	
	this.add.sprite(480, 96, 'tiles', 8, _bricks);
	
	this.add.sprite(528, 80, 'tiles', 3, _bricks);
	
	this.add.sprite(560, 144, 'tiles', 24, _bricks);
	
	this.add.tileSprite(560, 160, 16, 112, 'tiles', 32, _bricks);
	
	this.add.tileSprite(576, 144, 304, 16, 'tiles', 25, _bricks);
	
	this.add.tileSprite(720, 64, 160, 16, 'tiles', 8, _bricks);
	
	this.add.sprite(544, 64, 'tiles', 1, _bricks);
	
	this.add.tileSprite(560, 64, 112, 16, 'tiles', 2, _bricks);
	
	this.add.sprite(880, 144, 'tiles', 27, _bricks);
	
	this.add.tileSprite(880, 160, 16, 112, 'tiles', 35, _bricks);
	
	this.add.sprite(912, 48, 'tiles', 3, _bricks);
	
	this.add.tileSprite(928, 32, 160, 16, 'tiles', 2, _bricks);
	
	this.add.tileSprite(976, 48, 96, 16, 'tiles', 8, _bricks);
	
	this.add.sprite(1072, 144, 'tiles', 24, _bricks);
	
	this.add.tileSprite(1088, 144, 32, 16, 'tiles', 26, _bricks);
	
	this.add.sprite(1120, 128, 'tiles', 24, _bricks);
	
	this.add.sprite(1136, 128, 'tiles', 25, _bricks);
	
	this.add.sprite(1152, 112, 'tiles', 24, _bricks);
	
	this.add.sprite(1184, 96, 'tiles', 24, _bricks);
	
	this.add.sprite(1168, 112, 'tiles', 25, _bricks);
	
	this.add.sprite(1088, 32, 'tiles', 3, _bricks);
	
	this.add.sprite(1200, 96, 'tiles', 26, _bricks);
	
	this.add.tileSprite(1104, 16, 112, 16, 'tiles', 2, _bricks);
	
	this.add.tileSprite(1072, 160, 16, 112, 'tiles', 32, _bricks);
	
	this.add.sprite(320, 176, 'tiles', 17, _bricks);
	
	this.add.sprite(368, 176, 'tiles', 19, _bricks);
	
	this.add.tileSprite(576, 128, 48, 16, 'tiles', 17, _bricks);
	
	this.add.sprite(672, 128, 'tiles', 19, _bricks);
	
	this.add.sprite(688, 128, 'tiles', 17, _bricks);
	
	this.add.sprite(736, 128, 'tiles', 16, _bricks);
	
	this.add.sprite(672, 64, 'tiles', 3, _bricks);
	
	this.add.tileSprite(688, 48, 224, 16, 'tiles', 2, _bricks);
	
	this.add.sprite(752, 128, 'tiles', 17, _bricks);
	
	this.add.sprite(816, 128, 'tiles', 16, _bricks);
	
	this.add.sprite(1072, 128, 'tiles', 19, _bricks);
	
	this.add.sprite(1120, 144, 'tiles', 33, _bricks);
	
	this.add.tileSprite(864, 0, 32, 16, 'tiles', 33, _bricks);
	
	this.add.tileSprite(448, 48, 240, 16, 'tiles', 34, _bricks);
	
	this.add.tileSprite(448, 64, 96, 16, 'tiles', 34, _bricks);
	
	this.add.sprite(1136, 32, 'tiles', 8, _bricks);
	
	this.add.sprite(1184, 32, 'tiles', 8, _bricks);
	
	this.add.tileSprite(768, 16, 32, 16, 'tiles', 33, _bricks);
	
	this.add.sprite(816, 32, 'tiles', 33, _bricks);
	
	this.add.sprite(944, 16, 'tiles', 33, _bricks);
	
	this.add.tileSprite(1040, 0, 16, 32, 'tiles', 33, _bricks);
	
	this.add.tileSprite(464, 192, 96, 16, 'tiles', 4, _bricks);
	
	this.add.sprite(480, 192, 'tiles', 5, _bricks);
	
	this.add.sprite(512, 192, 'tiles', 5, _bricks);
	
	this.add.tileSprite(896, 160, 176, 16, 'tiles', 4, _bricks);
	
	this.add.sprite(928, 160, 'tiles', 5, _bricks);
	
	this.add.sprite(960, 160, 'tiles', 5, _bricks);
	
	this.add.sprite(1008, 160, 'tiles', 5, _bricks);
	
	this.add.sprite(1056, 160, 'tiles', 5, _bricks);
	
	this.add.tileSprite(0, 0, 448, 112, 'tiles', 34, _bricks);
	
	this.add.tileSprite(1184, 96, 32, 176, 'tiles', 34, _bricks);
	
	this.add.tileSprite(0, 192, 464, 80, 'tiles', 34, _bricks);
	
	this.add.tileSprite(0, 112, 16, 64, 'tiles', 35, _bricks);
	
	this.add.sprite(0, 176, 'tiles', 34, _bricks);
	
	this.add.sprite(16, 176, 'tiles', 25, _bricks);
	
	this.add.sprite(32, 176, 'tiles', 27, _bricks);
	
	this.add.sprite(496, 176, 'tiles', 21, _bricks);
	
	this.add.sprite(528, 160, 'tiles', 20, _bricks);
	
	this.add.sprite(544, 176, 'tiles', 29, _bricks);
	
	this.add.tileSprite(560, 144, 336, 128, 'tiles', 34, _bricks);
	
	this.add.sprite(928, 144, 'tiles', 20, _bricks);
	
	this.add.sprite(976, 144, 'tiles', 13, _bricks);
	
	this.add.sprite(1024, 144, 'tiles', 21, _bricks);
	
	this.add.tileSprite(1216, 96, 16, 176, 'tiles', 34, _bricks);
	
	this.add.tileSprite(1152, 112, 32, 160, 'tiles', 34, _bricks);
	
	this.add.tileSprite(1120, 128, 32, 144, 'tiles', 34, _bricks);
	
	this.add.tileSprite(1072, 144, 48, 128, 'tiles', 34, _bricks);
	
	this.add.tileSprite(1216, 32, 16, 64, 'tiles', 32, _bricks);
	
	this.add.sprite(432, 96, 'tiles', 3, _bricks);
	
	var _enemies = this.add.group();
	
	var _enemies1 = new Enemy2(this.game, 624, 128);
	_enemies1.data = {
		left: 570,
		right: 880
	};
	_enemies.add(_enemies1);
	
	var _enemies2 = new Enemy1(this.game, 240, 176);
	_enemies2.data = {
		left: 80,
		right: 432
	};
	_enemies.add(_enemies2);
	
	this.add.sprite(1184, 80, 'items', 13);
	
	var _ground = this.add.physicsGroup(Phaser.Physics.ARCADE);
	
	this.add.tileSprite(48, 192, 416, 16, 'p', null, _ground);
	
	this.add.tileSprite(16, 176, 32, 16, 'p', null, _ground);
	
	this.add.tileSprite(0, 112, 16, 64, 'p', null, _ground);
	
	this.add.tileSprite(496, 176, 16, 16, 'p', null, _ground);
	
	this.add.tileSprite(528, 160, 16, 16, 'p', null, _ground);
	
	this.add.tileSprite(544, 176, 16, 16, 'p', null, _ground);
	
	this.add.tileSprite(560, 144, 336, 16, 'p', null, _ground);
	
	this.add.tileSprite(560, 160, 16, 16, 'p', null, _ground);
	
	this.add.tileSprite(928, 144, 16, 16, 'p', null, _ground);
	
	this.add.tileSprite(976, 144, 16, 16, 'p', null, _ground);
	
	this.add.tileSprite(1024, 144, 16, 16, 'p', null, _ground);
	
	this.add.tileSprite(1072, 144, 48, 16, 'p', null, _ground);
	
	this.add.tileSprite(1120, 128, 32, 16, 'p', null, _ground);
	
	this.add.tileSprite(1152, 112, 32, 16, 'p', null, _ground);
	
	this.add.tileSprite(1184, 96, 32, 16, 'p', null, _ground);
	
	this.add.tileSprite(1216, 32, 16, 64, 'p', null, _ground);
	
	var _player = new Player(this.game, 32, 128);
	this.add.existing(_player);
	
	var _daemons = this.add.group();
	
	var _items1 = new Daemon(this.game, 144, 144);
	_daemons.add(_items1);
	
	var _items2 = new Daemon(this.game, 160, 144);
	_daemons.add(_items2);
	
	var _items3 = new Daemon(this.game, 176, 144);
	_daemons.add(_items3);
	
	var _items4 = new Daemon(this.game, 192, 144);
	_daemons.add(_items4);
	
	var _items5 = new Daemon(this.game, 928, 128);
	_daemons.add(_items5);
	
	var _items6 = new Daemon(this.game, 976, 128);
	_daemons.add(_items6);
	
	var _items7 = new Daemon(this.game, 1024, 128);
	_daemons.add(_items7);
	
	// public fields
	
	this.fLava = _lava;
	this.fEnemies = _enemies;
	this.fGround = _ground;
	this.fPlayer = _player;
	// from the User Code dialog
	this.myCreate();
	
	
};

/* --- end generated code --- */

Level.prototype.myInit = function() {
	this.world.setBounds(0, 0, 1232, 272);
	this.physics.arcade.gravity.y = 800;
};

Level.prototype.myCreate = function() {
	
	// player
	this.camera.follow(this.fPlayer, Phaser.Camera.FOLLOW_PLATFORMER);
	
	// weapon

	this.weapon = this.add.weapon(1, "items");
	this.weapon.setBulletFrames(8, 10, true);
	this.weapon.bulletKillType = Phaser.Weapon.KILL_CAMERA_BOUNDS;
	this.weapon.bulletSpeed = 400;
	this.weapon.bulletGravity.y = -800;
	this.weapon.trackSprite(this.fPlayer, 0, 8, true);
	
	// immovables
	var immovables = [ this.fGround, this.fLava, this.fEnemies ];

	for (var i = 0; i < immovables.length; i++) {
		var g = immovables[i];
		g.setAll("body.immovable", true);
		g.setAll("body.allowGravity", false);
	}
	
	this.fGround.setAll("renderable", false);
	
	// cursors
	this.cursors = this.input.keyboard.createCursorKeys();
	
	this.fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
};

Level.prototype.update = function() {

	if (!this.fPlayer.alive) {
		return;
	}

	// update player velocity

	this.physics.arcade.collide(this.fPlayer, this.fGround);

	var vel = 0;

	if (this.cursors.left.isDown) {
		vel = -100;
		this.fPlayer.scale.x = -1;
	} else if (this.cursors.right.isDown) {
		vel = 100;
		this.fPlayer.scale.x = 1;
	}

	this.fPlayer.body.velocity.x = vel;

	// update player animation

	var standing = this.fPlayer.body.touching.down;

	if (standing) {
		if (this.cursors.up.isDown) {
			this.fPlayer.body.velocity.y = -200;
		}

		if (vel == 0) {
			this.fPlayer.play("stay");
		} else {
			this.fPlayer.play("walk");
		}
	} else {
		this.fPlayer.play("jump");
	}

	// update weapon

	var scaleX = this.fPlayer.scale.x;
	this.weapon.bulletSpeed = scaleX * 400;
	this.weapon.bulletAngleOffset = scaleX < 0 ? 180 : 0;

	if (this.fireButton.isDown) {
		this.weapon.fire();
	}

	// update enemies

	this.physics.arcade.collide(this.fPlayer, this.fLava, this.die, null, this);

};

Level.prototype.die = function() {
	// game over
	this.fPlayer.play("die");
	this.fPlayer.kill();
	this.fPlayer.visible = true;
	this.camera.fade();
	this.time.events.add(1000, function() {
		this.game.state.start("Level");
	}, this);
};
