const Circle = require('red-steer').Obstacles.Circle;

class Cell extends Circle {

    constructor(settings) {
        super({
            position: settings.position,
            radius: settings.radius
        });

    }

}

module.exports = Cell;