const Map = require('red-steer').Map;
const Cell = require('./Cell');
const Virus = require('./Virus');

class Match extends Map {

    constructor(settings) {

        // init the map
        super({ size: settings.size });

    }

    makeCell(settings) {
        let cell = new Cell(settings);
        this.append(cell);
    }

    makeVirus(settings) {
        let virus = new Virus(settings);
    }

}

module.exports = Match;