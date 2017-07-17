var Nakama = {};

var c=0;
Nakama.configs = {
  GAME_WIDTH  :640,
  GAME_HEIGHT :960,
  MIN_WIDTH   :320,
  MIN_HEIGHT  :480,
  MAX_HEIGHT  :960 ,
  PLAYER1_POS : {
    x :200,
    y :800
  },
  PLAYER2_POS : {
    x :400,
    y :800
  },
  ENEMY1_POS :  {
    x: 340,
    y :100,
  }
};

window.onload = function(){
  Nakama.game = new Phaser.Game(640,960,Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
  Nakama.game.load.image('stripes_cyan', 'Assets/Textures/Obstacles/Stripes/cyan.png');
  Nakama.game.load.image('star','/Assets/Textures/Obstacles/Star/Star.png');
}

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.players= [];


  Nakama.enemies= [];


  Nakama.enemies.push(
    new cross(260,360)
  );


}

// update game state each frame
  var update = function(){

  Nakama.players.forEach(function(ship){
     ship.update();
  }
);

  Nakama.enemies.forEach(function(enemy){
  enemy.update();
  }
  );

}

// before camera render
var render = function(){}
