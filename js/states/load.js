var loadState = {
  preload : function(){
    Nakama.game.scale.minWidth = 320;
    Nakama.game.scale.minHeight = 480;
    Nakama.game.scale.maxWidth = Nakama.configs.GAME_WIDTH;
    Nakama.game.scale.maxHeight = Nakama.configs.GAME_HEIGHT;
    Nakama.game.scale.pageAlignHorizontally = true;
    Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    Nakama.game.time.advancedTiming = true;

    Nakama.game.load.image('stripes_cyan', 'Assets/Textures/Obstacles/Stripes/cyan.png');
    Nakama.game.load.image('star','/Assets/Textures/Obstacles/Star/Star.png');
    Nakama.game.load.image('playbutton','./Assets/Textures/play.png');
    Nakama.game.load.image('maxresdefault','./Assets/Textures/maxresdefault.png');
    Nakama.game.load.spritesheet('button_like','./Assets/Textures/like.png' , 0,0);
    Nakama.game.load.image('circle_cyan','./Assets/Textures/Obstacles/Circle/cyan.png');
    Nakama.game.load.image('circle_pink','./Assets/Textures/Obstacles/Circle/pink.png');
    Nakama.game.load.image('circle_purple','./Assets/Textures/Obstacles/Circle/purple.png');
    Nakama.game.load.image('circle_yellow','./Assets/Textures/Obstacles/Circle/yellow.png');

    // Nakama.game.load.audio('menu','./Assets/sound/music.mp3');
    Nakama.game.load.audio('click','./Assets/sound/Begin/button.wav');
    Nakama.game.load.audio('dead','./Assets/sound/Dead/dead.wav');
    Nakama.game.load.audio('jump','./Assets/sound/Gameplay/jump.wav');
    Nakama.game.load.audio('star','./Assets/sound/Gameplay/star.wav');
    Nakama.game.load.audio('switch','./Assets/sound/Gameplay/colorswitch.wav');
    Nakama.game.load.audio('menu','./Assets/sound/music.mp3');



  },
  create : function(){
    Nakama.game.state.start('menu');
  }
};
