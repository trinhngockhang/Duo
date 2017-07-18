var menuState = {
  create : function(){
    var button_play={
      x: Nakama.configs.GAME_WIDTH/2,
      y: Nakama.configs.GAME_HEIGHT/2+150
    }

    Nakama.game.add.sprite(100, 100, 'maxresdefault');
    button = Nakama.game.add.button(button_play.x, button_play.y, 'playbutton', this.actionOnClick, this, 1, 0, 2);
    button.anchor.setTo(0.5, 0.5);
    new SpinShapeController({x: button_play.x, y: button_play.y},1,0.85);
    new SpinShapeController({x: button_play.x, y: button_play.y},-1,1.08);
    new SpinShapeController({x: button_play.x, y: button_play.y},1,1.39);
    button_like = Nakama.game.add.button(Nakama.configs.GAME_WIDTH/2- 30, 875, 'button_like', this.actionOnClick_like, this, 1, 0, 2);
  },

  actionOnClick_like : function(){
    window.location="http://techkids.vn/";

  },

  actionOnClick : function(){
    Nakama.game.click = Nakama.game.add.audio('click');
    Nakama.game.click.volume = 1;
    Nakama.game.click.play();
    Nakama.game.state.start('play');
  },

};
