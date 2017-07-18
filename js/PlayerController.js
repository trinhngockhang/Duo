class PlayerController {
  constructor(configs, spriteName) {
    this.sprite = Nakama.playerGroup.create(Nakama.configs.GAME_WIDTH/2,Nakama.configs.GAME_HEIGHT*3/4,spriteName);
    this.configs = configs;
    this.sprite.pivot.x = this.configs.pivot;
    this.sprite.anchor.setTo(0.5);
    this.sprite.inputEnabled = true;
    this.sprite.input.enableDrag();
    this.sprite.input.allowVerticalDrag = false;
    this.jump = false;
    this.yChange = 0;
    this.yOrig = Nakama.configs.GAME_HEIGHT/2;
  }
  update(){
    this.sprite.rotation +=0.01;
    if(Nakama.keyboard.isDown(this.configs.TAP)){
      this.sprite.body.velocity.y = -this.configs.direction.y*this.configs.speed;
      this.jump = true;
      this.yChange = Math.max(this.yChange, this.yOrig - this.sprite.y);
      this.sound = Nakama.game.add.audio('jump');
      this.sound.volume = 1;
      this.sound.play();

    }else{this.jump = false;}
    if (this.jump) {
      this.sprite.body.gravity.y = 1000;
    }
  }
}
