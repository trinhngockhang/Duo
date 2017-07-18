var Nakama = {};
Nakama.configs = {
  GAME_WIDTH: 640,
  GAME_HEIGHT: 960

};

window.onload = function() {
  Nakama.game = new Phaser.Game(Nakama.configs.GAME_WIDTH,Nakama.configs.GAME_HEIGHT, Phaser.AUTO, '',{}, false, false);
  Nakama.game.state.add('boot',bootState);
  Nakama.game.state.add('load',loadState);
  Nakama.game.state.add('menu',menuState);
  Nakama.game.state.add('play',playState);

  Nakama.game.state.start('boot');

}
