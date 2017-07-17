var Nakama = {};
Nakama.configs = {
  GAME_WIDTH: 640,
  GAME_HEIGHT: 960

};

window.onload = function() {
  Nakama.game = new Phaser.Game(640, 960, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
  }, false, false);
}

// preparations before game starts
var preload = function() {
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('Star','Assets/Star.png');
}

// initialize the game
var create = function() {
  Nakama.game.physics.startSystem(Phaser.Physics.P2JS);
  Nakama.keyboard = Nakama.game.input.keyboard;
  Nakama.game.world.setBounds(0,0,Nakama.configs.GAME_WIDTH,Nakama.configs.GAME_HEIGHT);
  Nakama.playerGroup = Nakama.game.add.physicsGroup();

  Nakama.player1 = new PlayerController({TAP:Phaser.Keyboard.SPACEBAR,
                                          speed:1,
                                          pivot:100,
                                          direction:new Phaser.Point(0,600)},"Star.png");
  Nakama.player2 = new PlayerController({TAP:Phaser.Keyboard.SPACEBAR,
                                          speed:1,
                                          pivot:-100,
                                          direction:new Phaser.Point(0,600)},"Star.png");
  Nakama.pool = [];
  //add map                               
  Nakama.game.physics.p2.enable(Nakama.player1,Nakama.player2);
  Nakama.player1.fixedToCamera = true;
  Nakama.player2.fixedToCamera = true;
  Nakama.game.camera.deadzone = new Phaser.Rectangle(0,Nakama.configs.GAME_HEIGHT/2, Nakama.configs.GAME_WIDTH, Nakama.configs.GAME_HEIGHT/2);
}

// update game state each frame
var update = function() {
  Nakama.player1.update();
  Nakama.player2.update();

  Nakama.game.world.setBounds(0, -Nakama.player1.yChange, Nakama.configs.GAME_WIDTH, Nakama.configs.GAME_HEIGHT);

}

// before camera render (mostly for debug)
var render = function() {}
