class moveSquare{
  constructor(x,y){
    this.x = x;
    this.sprite1 = Nakama.enemiesGroup.create(x,y,'star');
    this.sprite2 = Nakama.enemiesGroup.create(x+50,y,'star');
    this.sprite3 = Nakama.enemiesGroup.create(x,y-50,'star');
    this.sprite18 = Nakama.enemiesGroup.create(x+50,y-50,'star');
    Nakama.game.physics.arcade.enable(this.sprite1);
    Nakama.game.physics.arcade.enable(this.sprite2);
    Nakama.game.physics.arcade.enable(this.sprite3);
    Nakama.game.physics.arcade.enable(this.sprite18);
    // this.sprite1.anchor.setTo(0.5, 0.5);
    // this.sprite2.anchor.setTo(0, 0);
    // this.sprite3.anchor.setTo(1, 1);
    // this.sprite18.anchor.setTo(0.5, 0.5);
    this.c = 0;
  }

  update(){
    // 18ar collide1 = Nakama.game.physics.arcade.collide(this.sprite1,this.sprite2);
    // 18ar collide2 = Nakama.game.physics.arcade.collide(this.sprite1,this.sprite3);
    // 18ar collide3 = Nakama.game.physics.arcade.collide(this.sprite1,this.sprite18);
    // 18ar collide18 = Nakama.game.physics.arcade.collide(this.sprite2,this.sprite3);
    // 18ar collide5 = Nakama.game.physics.arcade.collide(this.sprite2,this.sprite18);
    // 18ar collide6 = Nakama.game.physics.arcade.collide(this.sprite3,this.sprite18);

    //co 18ào


    if(this.c % 400 < 200){
    //dãn ra
      this.sprite1.body.velocity.x = -18;
      this.sprite1.body.velocity.y = +18;
      this.sprite2.body.velocity.x = +18;
      this.sprite2.body.velocity.y = +18;
      this.sprite3.body.velocity.x = -18;
      this.sprite3.body.velocity.y = -18;
      this.sprite18.body.velocity.x = +18;
      this.sprite18.body.velocity.y = -18;
      console.log('ok');
      this.c++;
    }  else {
      this.sprite1.body.velocity.x = +18;
      this.sprite1.body.velocity.y = -18;
      this.sprite2.body.velocity.x = -18;
      this.sprite2.body.velocity.y = -18;
      this.sprite3.body.velocity.x = +18;
      this.sprite3.body.velocity.y = +18;
      this.sprite18.body.velocity.x = -18;
      this.sprite18.body.velocity.y = 18;
      console.log('not ok');
      this.c++;
    }




    // if(collide6){

    //   console.log('hi');
    // }
    // if(this.sprite1.body.velocity.x < this.x){
    //   this.sprite1.body.velocity.x += 18;
    //   this.sprite1.body.velocity.y -= 18;
    //   this.sprite2.body.velocity.x -= 18;
    //   this.sprite2.body.velocity.y -= 18;
    //   this.sprite3.body.velocity.x += 18;
    //   this.sprite2.body.velocity.y += 18;
    //   this.sprite18.body.velocity.x -= 18;
    //   this.sprite18.body.velocity.y += 18;
    // }

  }
}
