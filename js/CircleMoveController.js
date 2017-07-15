class CircleMoveController{
  constructor(position) {
    var parts = [];

    CircleMoveController.colors.forEach(function(color) {
      let sprite = new ObstacleController("circle_"+color,color,CircleMoveController.configs,CircleMoveController.configs.offsetAngle,position);
      // console.log(sprite);
      parts.push(sprite);
    });

    this.parts = parts;
    this.position = position;
    this.used = true;

  }

  update() {
    // this.parts.forEach(function(part) {
    //
    //   if (part.color!=Nakama.game.player.sprite.color) part.body.loadPolygon('circle_physics', part.color);
    //   part.body.velocity.x = 0;
    // });
  }


}

CircleMoveController.configs= {
  anchor:{x:0.5,y:0.5},
  ratio:0.5,
  offsetAngle: 0
}

CircleMoveController.colors= ["purple","yellow"];
