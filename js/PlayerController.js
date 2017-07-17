class PlayerController {
  constructor(configs, spriteName) {
    this.sprite = Nakama.playerGroup.create(Nakama.configs.GAME_WIDTH/2,Nakama.configs.GAME_HEIGHT/2,'Star',spriteName);
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
    this.sprite.rotation +=0.02;
    if(Nakama.keyboard.isDown(this.configs.TAP)){
      this.sprite.body.velocity.y = -600;
      this.jump = true;
      this.yChange = Math.max(this.yChange, this.yOrig - this.sprite.y);
    }else{this.jump = false;}
    if (this.jump) {
      this.sprite.body.gravity.y = 1000;
    }
  }
}
