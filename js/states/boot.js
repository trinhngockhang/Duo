var bootState = {
  create : function () {
    Nakama.game.physics.startSystem(Phaser.Physics.P2JS);
    Nakama.game.state.start('load');
  }
};
