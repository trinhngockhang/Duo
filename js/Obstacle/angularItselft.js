class angularItselft{
  constructor(x,y){
    this.sprite = Nakama.game.add.sprite(x,y,'stripes_cyan');
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.angularVelocity = 90;
  }
  update(){

  }
}
