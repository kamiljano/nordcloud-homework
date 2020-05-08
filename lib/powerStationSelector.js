'use strict';

/**
 * A sorting function builder aiming to sort power stations from the highest to lowest power
 *
 * @param x {number} your X coordinate
 * @param y {number} your Y coordinate
 * @returns {function} a sorting function for the {@code PowerStation} objects
 */
const sortFromHighestToLowerPowerForCoordinates = (x, y) =>
    (powerStationA, powerStationB) =>
        powerStationB.getPowerForCoordinates(x, y) - powerStationA.getPowerForCoordinates(x, y);

/**
 * Find the power station with the most power
 *
 * @param powerStations {PowerStation[]} - an array of all {@code PowerStation} objects
 * @returns {function} the object with a function findTheOneWithHighestPowerForCoordinates allowing you to specify the details of your location
 */
module.exports.forPowerStations = (powerStations = []) => {
    return {
        /**
         * The function that actually performs the calculation searching for the station with the most power
         *
         * @param x {number} the user's X coordinate
         * @param y {number} the user's Y coordinate
         * @returns {null|PowerStation} null if there are no power stations within reach. Otherwise an object of type PowerStation.
         */
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