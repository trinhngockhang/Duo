class cross{
  constructor(x,y){
    this.sprite1 = Nakama.enemiesGroup.create(x,y,'star');
    this.sprite2 = Nakama.enemiesGroup.create(x+100,y-100,'star');
    this.sprite3 = Nakama.enemiesGroup.create(x+200,y,'star');
    this.sprite4 = Nakama.enemiesGroup.create(x+100,y+100,'star');
    Nakama.game.physics.arcade.enable(this.sprite1);
    Nakama.game.physics.arcade.enable(this.sprite2);
    Nakama.game.physics.arcade.enable(this.sprite3);
    Nakama.game.physics.arcade.enable(this.sprite4);
    this.x = x;
    this.c = 0;
  }
  update(){
    if(this.c % 350 < 155){
    //co vào
      this.sprite1.body.velocity.x = 18;
      this.sprite2.body.velocity.y = +18;
      this.sprite3.body.velocity.x = -18;
      this.sprite4.body.velocity.y = -18;
      console.log('ok');
      this.c++;
    }
    else if((this.c % 350 > 175) && (this.c% 350 <330)){
      this.sprite1.body.velocity.x = -18;
      this.sprite2.body.velocity.y = -18;
      this.sprite3.body.velocity.x = +18;
      this.sprite4.body.velocity.y = +18;
      console.log('not ok');
      this.c++;
    }else{
      this.sprite1.body.velocity.x = 0;
      this.sprite2.body.velocity.y = 0;
      this.sprite3.body.velocity.x = 0;
      this.sprite4.body.velocity.y = 0;
      this.c ++;
      console.log(this.c + ' stop');
    }
  }
}
