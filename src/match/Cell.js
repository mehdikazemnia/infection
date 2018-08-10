const Circle = require('red-steer').Obstacles.Circle;

class Cell extends Circle {

    constructor(settings) {
        super({
            position: settings.position,
            radius: settings.radius
        });

        this.texture = PIXI.utils.TextureCache['cell_' + settings.color];
        this.view = new PIXI.Sprite(this.texture);
        this.view.x = this.position.x;
        this.view.y = this.position.y;
        this.view.width = this.view.height = this.radius * 2;
        this.view.anchor.set(.5,.5);

    }

    join(chain) {
        super.join(chain);
        this.chain.map.pixiapp.stage.addChild(this.view);
    }

}

module.exports = Cell;