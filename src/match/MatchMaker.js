const Match = require('./Match');

function make(mapid) {

    // TODOS:
    // remove existing match (if exists)
    // ...

    let map = require('../../storage/maps/map-' + mapid);
    let match = new Match({ size: map.size });
    match.load(null, () => {
        map.cells.forEach(cellData => {
            match.makeCell({
                position: cellData.pos,
                radius: cellData.capacity / 2,
                color: 'gray'
            });
        });
    });


}

module.exports = {
    make: make
};