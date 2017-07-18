class CircleMoveController{
  constructor(x,y) {
    this.sprite1 = Nakama.enemiesGroup.create(x,y,'circle_cyan');
    this.sprite2 = Nakama.enemiesGroup.create(x,y,'circle_cyan');
    Nakama.game.physics.arcade.enable(this.sprite1);
    Nakama.game.physics.arcade.enable(this.sprite2);
    this.sprite1.anchor.setTo(0.5);
    this.sprite2.anchor.setTo(0.5);
    this.sprite1.body.angularVelocity = 30;
    this.sprite2.body.angularVelocity = 30;

  }

  update() {

  }


}
