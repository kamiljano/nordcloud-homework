#!/usr/bin/env node

'use strict';

const info = require('../package.json');
const { PowerStation, forPowerStations } = require('../');
const { program } = require('commander');

const powerRegex = /-{0,1}\d{1,5},-{0,1}\d{1,5},\d{1,5}/;
const simpleCoordinatesRegex = /\d{1,5},\d{1,5}/;

const power = value => value.split(';').map(coordinatesAndRange => {
    if (!powerRegex.test(coordinatesAndRange)) {
        console.error(`The coordinates with range "${coordinatesAndRange}" are in a wrong format`);
        process.exit(2);
    }
    const [x, y, range] = coordinatesAndRange.split(',');
    return new PowerStation(parseFloat(x), parseFloat(y), parseFloat(range));
});

const simpleCoordinates = value => {
    if (!simpleCoordinatesRegex.test(value)) {
        console.error(`The coordinates "${value}" are in a wrong format`);
        process.exit(3);
    }
    const [x, y] = value.split(',');
    return {
        x: parseFloat(x),
        y: parseFloat(y)
    };
}

program
    .name('find-best-power-station')
    .version(info.version)
    .option(
        '-p, --power-stations <power>',
        'Semicolon-separated power stations in the format <X-coordinate,Y-coordinate,Range>',
        power
    )
    .requiredOption(
        '-y, --your-coordinates <coordinates>',
        'Your coordinates in the format <X-coordinate,Y-coordinate>',
        simpleCoordinates
    );

program.parse(process.argv);

const mostSuitableStation = forPowerStations(program.powerStations)
    .findTheOneWithHighestPowerForCoordinates(program.yourCoordinates.x, program.yourCoordinates.y);

if (mostSuitableStation) {
    console.log(
        `Best link station for point ${program.yourCoordinates.x},${program.yourCoordinates.y} `
            + `is ${mostSuitableStation.x},${mostSuitableStation.y} `
            + `with power ${mostSuitableStation.getPowerForCoordinates(program.yourCoordinates.x, program.yourCoordinates.y)}`
    );
} else {
    console.warn(`No link station within reach for point ${program.yourCoordinates.x},${program.yourCoordinates.y}`);
}