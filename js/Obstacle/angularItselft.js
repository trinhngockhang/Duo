class angularItselft{
  constructor(x,y){
    this.sprite = Nakama.enemiesGroup.create(x,y,'stripes_cyan');
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.angularVelocity = 90;
  }
  update(){

  }
}
