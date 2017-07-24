var playState = {
  create : function (){
    Nakama.currScore = 0;
    Nakama.textStyle = { font: "100px Arial", fill: "#ffffff", align: "center" };
    Nakama.game.text = Nakama.game.add.text(10, 10, Nakama.currScore, Nakama.textStyle);
    Nakama.game.text.fixedToCamera = true;
    Nakama.keyboard = Nakama.game.input.keyboard;
    Nakama.game.world.setBounds(0,0,Nakama.configs.GAME_WIDTH,Nakama.configs.GAME_HEIGHT);
    Nakama.playerGroup = Nakama.game.add.physicsGroup();
    Nakama.candleGroup = Nakama.game.add.physicsGroup();
    Nakama.enemiesGroup = Nakama.game.add.physicsGroup();
    Nakama.player = [];
    Nakama.player.push(new PlayerController({TAP:Phaser.Keyboard.SPACEBAR,
                                            speed:1,
                                            direction:new Phaser.Point(0,600)},'star'));


    Nakama.pool = [];
    Nakama.arr = [];
    for(let i=0; i<20; i++){
      Nakama.arr.push(Math.floor(Math.random() * (5-0+1)) + 0);
    }
    var y = 300;
    for(let i=0;i <Nakama.arr.length; i++){
      switch (Nakama.arr[i]) {
        case 0:
          Nakama.pool.push(new angularItselft(300,y));
          y -= 600;
          break;
        case 1:
          Nakama.pool.push(new cross(200,y));
          y -= 600;
          break;
        case 2:
          Nakama.pool.push(new CircleMoveController(300,y));
          y -= 600;
          break;
        case 3:
          Nakama.pool.push(new freezePoison(300,y));
          y -= 600;
          break;
        case 6:
          Nakama.pool.push(new Horizontal(300,y));
          y -= 600;
          break;
       case 5:
          Nakama.pool.push(new moveSquare(300,y));
          y -= 600;
          break;
        case 4:
          Nakama.pool.push(new enlarge(300,y));
          y -= 600;
          break;
      }
    }


    Nakama.player.forEach(function(sprite){
      Nakama.game.physics.p2.enable(sprite);
      sprite.fixedToCamera = true;
    });
    Nakama.game.camera.deadzone = new Phaser.Rectangle(0,Nakama.configs.GAME_HEIGHT/2, Nakama.configs.GAME_WIDTH, Nakama.configs.GAME_HEIGHT/2);

  },
  update : function (){
    Nakama.player.forEach(function(sprite){
      sprite.update();
      Nakama.game.world.setBounds(0, -sprite.yChange, Nakama.configs.GAME_WIDTH, Nakama.configs.GAME_HEIGHT);
    });
    // Nakama.point.update();
    Nakama.pool.forEach(function(obs) {
      obs.update();
    });
  },
  render : function() {}
};
