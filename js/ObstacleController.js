class ObstacleController{
	constructor(spriteName,color,configs,angle,position) {
		this.sprite = Nakama.game.add.sprite(position.x,position.y,spriteName);
		this.configs = configs;
		Nakama.game.physics.arcade.enable(this.sprite);
		//this.sprite.scale.setTo(this.configs.ratio,this.configs.ratio);
		// Nakama.game.physics.p2.enable([this.sprite],false);
		// this.sprite.body.angle = angle;
		// this.sprite.color = color;
		// this.sprite.anchor = new Phaser.Point(this.configs.anchor.x,this.configs.anchor.y);
		this.sprite.body.angularVelocity = 90;
		this.sprite.body.angularDamping = 0;
		//
		// this.sprite.body.kinematic = true;
		// this.sprite.anchor.setTo(0);
    // this.sprite.pivot.x = 200;
		this.sprite.anchor.setTo(0.5, 0.5);

	}

	update(){
		this.sprite.rotation +=0.5;
		// console.log(this.sprite.position.y);
		if(this.sprite.position.y > Nakama.game.camera.y + Nakama.game.configs.GAME_HEIGHT){
			this.sprite.kill;
			// console.log("kill");
		}
	}

}
