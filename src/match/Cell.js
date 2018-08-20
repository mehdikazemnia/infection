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

        // view assets in one place
        this.assets = {};

        // circle shape
        let circle = new PIXI.Graphics();
        circle.lineStyle(1, 0xCCCCCC);
        circle.drawCircle(0, 0, this.radius + 5);
        circle.endFill();

        // making a texture out of the circle
        let circleTexture = circle.generateTexture();

        // circle spite
        this.assets.circle = new PIXI.Sprite(circleTexture);
        this.assets.circle.x = this.position.x;
        this.assets.circle.y = this.position.y;
        this.assets.circle.anchor.set(.5, .5);
        this.assets.circle.visible = false;

        this.view.on('mouseover', () => {
            this.assets.circle.visible = true;
        });

        this.view.on('mouseout', () => {
            this.assets.circle.visible = false;
        });
    }

    join(chain) {
        super.join(chain);
        this.chain.map.pixiapp.stage.addChild(this.view);
        this.chain.map.pixiapp.stage.addChild(this.assets.circle);
    }

}

module.exports = Cell;