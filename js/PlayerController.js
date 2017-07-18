class PlayerController {
  constructor(configs, spriteName) {
    this.sprite3 = Nakama.candleGroup.create(Nakama.configs.GAME_WIDTH/2 ,Nakama.configs.GAME_HEIGHT*3/4,"stripes_cyan");
    this.sprite = Nakama.playerGroup.create(Nakama.configs.GAME_WIDTH/2,Nakama.configs.GAME_HEIGHT*3/4,spriteName);
    this.configs = configs;
    this.sprite.pivot.x = -PlayerController.PIVOT;
    this.sprite.anchor.setTo(0.5);
    this.sprite.inputEnabled = true;
    this.sprite.input.enableDrag();
    this.sprite.input.allowVerticalDrag = false;
    this.jump = false;
    this.yChange = 0;
    this.yOrig = Nakama.configs.GAME_HEIGHT/2;

    this.sprite2 = Nakama.playerGroup.create(Nakama.configs.GAME_WIDTH/2,Nakama.configs.GAME_HEIGHT*3/4,spriteName);
    this.sprite2.pivot.x = PlayerController.PIVOT;
    this.sprite2.anchor.setTo(0.5);
    this.sprite2.inputEnabled = true;
    this.sprite2.input.enableDrag();
    this.sprite2.input.allowVerticalDrag = false;

    this.sprite3.anchor.setTo(0.5);
    this.sprite3.inputEnabled = true;
    this.sprite3.input.enableDrag();
    this.sprite3.input.allowVerticalDrag = false;

  }
  update(){
    this.sprite.rotation +=0.01;
    this.sprite2.rotation +=0.01;
    this.sprite3.rotation +=0.01;
    console.log(this.sprite.body.position.x);
    console.log(this.sprite.body.position.y);
    console.log(this.sprite2.body.position.x);
    console.log(this.sprite2.body.position.y);
    console.log(this.sprite3.body.position.x);
    if(Nakama.keyboard.isDown(this.configs.TAP)){
      this.sprite.body.velocity.y = -this.configs.direction.y*this.configs.speed;
      this.sprite2.body.velocity.y = -this.configs.direction.y*this.configs.speed;
      this.sprite3.body.velocity.y = -this.configs.direction.y*this.configs.speed;
      this.jump = true;
      this.yChange = Math.max(this.yChange, this.yOrig - this.sprite.y);
      this.sound = Nakama.game.add.audio('jump');
      this.sound.volume = 1;
      this.sound.play();

    }else{this.jump = false;}
    if (this.jump) {
      this.sprite.body.gravity.y = 1000;
      this.sprite2.body.gravity.y = 1000;
      this.sprite3.body.gravity.y = 1000;
    }
  }
}
PlayerController.PIVOT = 80;
