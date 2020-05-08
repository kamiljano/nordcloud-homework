'use strict';

const sortFromHighestToLowerPowerForCoordinates = (x, y) =>
    (powerStationA, powerStationB) =>
        powerStationB.getPowerForCoordinates(x, y) - powerStationA.getPowerForCoordinates(x, y);

module.exports.forPowerStations = (powerStations = []) => {
    return {
        findTheOneWithHighestPowerForCoordinates(x, y) {
            if (!powerStations.length) {
                return null;
            }
            const mostSuitablePowerStation = powerStations
                .sort(sortFromHighestToLowerPowerForCoordinates(x, y))[0];

            return mostSuitablePowerStation.getPowerForCoordinates(x, y)
                ? mostSuitablePowerStation
                : null;
        }
    };
};