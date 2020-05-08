'use strict';

/**
 * The Pitagoras formula.
 * Calculates the c from the formula c^2 = a^2 + b^2
 *
 * @param a {number}
 * @param b {number}
 * @returns {number}
 */
const calculateCWithPitagoras = (a, b) => Math.sqrt((a * a) + (b * b));

/**
 * The PowerStation.
 * Stores, the coordinates and reach + it calculates the power for specified user coordinates
 *
 * @type {PowerStation}
 */
module.exports.PowerStation = class {

    /**
     * Constructor
     *
     * @param x {number} the X coordinate of the power station
     * @param y {number} the Y coordinate of the power station
     * @param reach {number} the reach/range of the power station
     */
    constructor(x, y, reach) {
        this.x = x;
        this.y = y;
        this.reach = reach;
    }

    /**
     * Calculates the distance of the user from the power plant
     *
     * @param x {number} user's X coordinate
     * @param y {number} user's Y coordinate
     * @returns {number} the distance from the power plant
     */
    getDistanceFromCoordinates(x, y) {
        const a = Math.abs(this.x - x);
        const b = Math.abs(this.y - y);
        return calculateCWithPitagoras(a, b);
    }

    /**
     * Calculates the power that the power station can provide depending on the user's distance from it
     *
     * @param x {number} user's X coordinate
     * @param y {number} user's Y coordinate
     * @returns {number} the power that can be provided
     */
    getPowerForCoordinates(x, y) {
        const distance = this.getDistanceFromCoordinates(x, y);
        return distance > this.reach
            ? 0
            : Math.pow(this.reach - distance, 2);
    }
}