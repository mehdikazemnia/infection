const Circle = require('red-steer').Obstacles.Circle;

class Cell extends Circle {

    constructor(settings) {
        super({
            position: settings.position,
            radius: settings.radius
        });

        this.texture = PIXI.utils.TextureCache[settings.type];
        this.view = false;
    }

}

module.exports = Cell;