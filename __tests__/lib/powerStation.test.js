'use strict';

const { PowerStation } = require('../../lib/powerStation');

describe('Given a power station, When calculating the power of the station', () => {

    describe('When calculating the distance from the station based on the Pitagora\'s formula', () => {

        test('and all the coordinates are higher than zero, then the distance is correctly calculated', () => {
            const distance = new PowerStation(0, 0, 10).getDistanceFromCoordinates(3, 5);
            expect(distance).toEqual(5.830951894845301);
        });

        test('and some of the coordinates are lower than than zero, then the distance is correctly calculated', () => {
            const distance = new PowerStation(-1, 0, 10).getDistanceFromCoordinates(3, -5);
            expect(distance).toEqual(6.4031242374328485);
        });

    });

    describe('When calculating the power of the station', () => {

        test('And the distance is lower than the reach, Then the power is calculated as (reach - distance)^2', () => {
            const reach = 10;
            const power = new PowerStation(0, 0, reach).getPowerForCoordinates(3, 5);
            const distance = 5.830951894845301;
            const diff = reach - distance;

            expect(power).toEqual(diff * diff);
        });

        test('And the distance is equal to the reach, Then the power is calculated as (reach - distance)^2', () => {
            const reachAndDistance = 5.830951894845301;
            const power = new PowerStation(0, 0, reachAndDistance).getPowerForCoordinates(3, 5);

            // 0 because if distance = x and reach = x then x - x = 0 and 0^2 = 0
            expect(power).toEqual(0);
        });

        test('And the distance is greater than the reach, Then the power is equal to 0', () => {
            const reach = 1;
            const power = new PowerStation(0, 0, reach).getPowerForCoordinates(3, 5);

            expect(power).toEqual(0);
        });

    });

});