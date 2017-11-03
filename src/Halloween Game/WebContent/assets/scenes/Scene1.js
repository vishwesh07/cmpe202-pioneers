
// -- user code here --

/* --- start generated code --- */

// Generated by Phaser Editor v1.4.2 (Phaser v2.6.2)


/**
 * Scene1.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function Scene1(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _back = this.game.add.sprite(-3, -7, 'back3', null, this);
	
	var _collisionLayer = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);
	
	var _physics2 = this.game.add.sprite(-274, 1021, 'AtlasV1', 'physics', _collisionLayer);
	_physics2.scale.setTo(4.2, 1.0);
	_physics2.anchor.setTo(-0.14880000220404732, -0.4443424769810268);
	
	var _physics1 = this.game.add.sprite(950, 819, 'AtlasV1', 'physics', _collisionLayer);
	_physics1.scale.setTo(0.8, 1.0);
	
	var _physics = this.game.add.sprite(396, 822, 'AtlasV1', 'physics', _collisionLayer);
	_physics.scale.setTo(0.2, 1.0);
	
	var _physics3 = this.game.add.sprite(1479, 817, 'AtlasV1', 'physics', _collisionLayer);
	_physics3.scale.setTo(0.3848321680163334, 1.21328290334449);
	
	var _physics4 = this.game.add.sprite(651, 573, 'AtlasV1', 'physics', _collisionLayer);
	_physics4.scale.setTo(0.5566666423674048, 0.8971426226631775);
	
	var _physics6 = this.game.add.sprite(252, 565, 'AtlasV1', 'physics', _collisionLayer);
	_physics6.scale.setTo(0.20512006403733743, 1.4265660112167005);
	
	var _physics5 = this.game.add.sprite(1351, 581, 'AtlasV1', 'physics', _collisionLayer);
	_physics5.scale.setTo(0.20373760153654544, 1.767824482287428);
	
	var _base = this.game.add.sprite(2, 1028, 'AtlasV1', 'base1', this);
	_base.scale.setTo(4.5, 1.0);
	
	var _Enemy = this.game.add.group(this);
	
	var _enemy = this.game.add.sprite(974, 738, 'enemy1', 0, _Enemy);
	_enemy.scale.setTo(0.23202611126727168, 0.2426229774533215);
	
	var _enemy1 = this.game.add.sprite(1600, 753, 'enemy2', null, _Enemy);
	_enemy1.scale.setTo(0.22598094249506895, 0.20995701172455944);
	
	var _enemy2 = this.game.add.sprite(828, 512, 'enemy1', 2, _Enemy);
	_enemy2.scale.setTo(0.19983435357502707, 0.22658118723411508);
	
	var _Platform = this.game.add.group(this);
	
	var _platform3 = this.game.add.sprite(1336, 545, 'AtlasV1', 'platform1', _Platform);
	_platform3.scale.setTo(0.7611210120316502, 0.6018688621994187);
	
	var _platform2 = this.game.add.sprite(1474, 808, 'AtlasV1', 'platform6', _Platform);
	_platform2.scale.setTo(0.2, 0.2);
	
	var _platform = this.game.add.sprite(952, 816, 'AtlasV1', 'platform3', _Platform);
	_platform.scale.setTo(0.6570785975041205, 0.23593943111070773);
	
	var _platform1 = this.game.add.sprite(386, 815, 'AtlasV1', 'platform4', _Platform);
	_platform1.scale.setTo(0.3, 0.3);
	
	var _platform4 = this.game.add.sprite(644, 570, 'AtlasV1', 'platform5', _Platform);
	_platform4.scale.setTo(0.7453131585384848, 0.2869294299309859);
	
	var _platform5 = this.game.add.sprite(224, 524, 'AtlasV1', 'platform1', this);
	_platform5.scale.setTo(0.9402803748608576, 0.741214580142837);
	
	var _player = this.game.add.sprite(979, 177, 'player', 0, this);
	_player.anchor.setTo(0.5, 0.0);
	_player.animations.add('walk', [0, 1], 4, true);
	_player.animations.add('jump', [3], 60, false);
	_player.animations.add('idle', [0], 60, false);
	_player.animations.add('attack', [0, 4], 4, false);
	this.game.physics.arcade.enable(_player);
	
	
	this.position.setTo(0, 5);
	
	// public fields
	
	this.fBack = _back;
	this.fCollisionLayer = _collisionLayer;
	this.fEnemy = _Enemy;
	this.fPlayer = _player;
	
}

/** @type Phaser.Group */
var Scene1_proto = Object.create(Phaser.Group.prototype);
Scene1.prototype = Scene1_proto;
Scene1.prototype.constructor = Scene1;

/* --- end generated code --- */
// -- user code here --
