'use strict';

const calculateCWithPitagoras = (a, b) => Math.sqrt((a * a) + (b * b));

module.exports.PowerStation = class {

    constructor(x, y, reach) {
        this.x = x;
        this.y = y;
        this.reach = reach;
    }

    getDistanceFromCoordinates(x, y) {
        const a = Math.abs(this.x - x);
        const b = Math.abs(this.y - y);
        return calculateCWithPitagoras(a, b);
    }

    getPowerForCoordinates(x, y) {
        const distance = this.getDistanceFromCoordinates(x, y);
        return distance > this.reach
            ? 0
            : Math.pow(this.reach - distance, 2);
    }
}