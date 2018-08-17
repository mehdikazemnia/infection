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
        this.view.anchor.set(.5, .5);

        // interactivity and cursor style
        this.view.interactive = true;
        this.view.buttonMode = true;

        // hitArea must be a circle, not a rectangle
        let hitArea = new PIXI.Circle(0, 0, 200); // stupid bug fix!? 200 radius because the texture is 400x400
        this.view.hitArea = hitArea;

        this.view.on('mouseover', () => {
            this.view.texture = PIXI.utils.TextureCache['cell_red'];
        });
        
        this.view.on('mouseout', () => {
            this.view.texture = PIXI.utils.TextureCache['cell_' + settings.color];
        });
    }

    join(chain) {
        super.join(chain);
        this.chain.map.pixiapp.stage.addChild(this.view);
    }

}

module.exports = Cell;