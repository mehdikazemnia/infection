const Map = require('red-steer').Map;
const Cell = require('./Cell');
const Virus = require('./Virus');

class Match extends Map {

    constructor(settings) {

        // init the map
        super({ size: settings.size });

        this.pixiapp = new PIXI.Application({
            width: settings.size[0],
            height: settings.size[1],
            transparent: true
        });

        // TODO: load textures
        // this.pixi.loader
        //     .add('...', '...')
        //     .load(() => { this.onLoad() });

        document.body.appendChild(this.pixiapp.renderer.view);
    }

    onLoad() {}

    makeCell(settings) {
        let cell = new Cell(settings);
        this.append(cell);
        return cell;
    }

    makeVirus(settings) {
        let virus = new Virus(settings);
        return virus
    }

}

module.exports = Match;