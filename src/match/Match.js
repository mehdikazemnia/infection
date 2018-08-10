const Map = require('red-steer').Map;
const Cell = require('./Cell');
const Virus = require('./Virus');

class Match extends Map {

    constructor(settings) {

        // init the map
        super({ size: settings.size });

        // the pixi app
        this.pixiapp = new PIXI.Application({
            width: settings.size[0],
            height: settings.size[1],
            transparent: true
        });

        // linking pixiapp to the chain, so it'll be usable in other classes
        this.chain.map.pixiapp = this.pixiapp;

        // append the canvas (temporary)
        document.body.appendChild(this.pixiapp.renderer.view);
    }

    load(textures, callback) {
        // TODO: mind the textures variable
        // load textures
        this.pixiapp.loader
            .add('cell_gray', 'textures/cell-gray.png')
            .load(() => { callback() });
    }

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