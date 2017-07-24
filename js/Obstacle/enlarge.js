class enlarge {
  constructor(x,y){
    this.sprite = Nakama.game.add.sprite(x,y,'star');

    this.c = 0;
    this.x = 1;
    this.sprite.anchor.setTo(0.5, 0.5);
  }
  update(){


    if(this.c %70 < 35){
      this.sprite.scale.setTo(this.x, this.x);
      this.x = this.x + 0.025;
      this.c++;
    }else {
      this.sprite.scale.setTo(this.x, this.x);
      this.x = this.x - 0.025;
      this.c++;
    }


  }
}
