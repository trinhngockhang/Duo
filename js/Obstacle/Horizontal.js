class Horizontal {
  constructor(x,y){
    // this.sprite = Nakama.enemies.create(320,480,'stripes_cyan');
    this.sprite = Nakama.enemiesGroup.create(x+300,480,'stripes_cyan');
    this.sprite1 = Nakama.enemiesGroup.create(x-300,480,'stripes_cyan');
    this.sprite2 = Nakama.enemiesGroup.create(x,480,'stripes_cyan');
    Nakama.game.physics.arcade.enable(this.sprite);
    Nakama.game.physics.arcade.enable(this.sprite1);
    Nakama.game.physics.arcade.enable(this.sprite2);
    this.sprite.body.setSize(85,85,50,50);
    this.sprite1.body.setSize(85,85,50,50);
    this.sprite2.body.setSize(85,85,50,50);
    this.x = x;
    // this.sprite.body.collideWorldBounds= true;
    // this.sprite1.body.collideWorldBounds= true;

  }
  update(){
    this.sprite.body.velocity.x = 100;
    this.sprite1.body.velocity.x = 100;
    this.sprite2.body.velocity.x = 100;
    if(this.sprite.body.position.x > 650) {
      this.sprite.body.position.x =-250;
    }
    if(this.sprite1.body.position.x > 650) {
      this.sprite1.body.position.x =-250;
    }
    if(this.sprite2.body.position.x > 650) {
      this.sprite2.body.position.x =-250;
    }
  }
}
