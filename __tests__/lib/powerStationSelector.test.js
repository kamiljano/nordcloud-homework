'use strict';

const { forPowerStations } = require('../../lib/powerStationSelector');
const { PowerStation } = require('../../lib/powerStation');

describe('Given the power station map, When searching for the power station providing the most power', () => {

    test('But the power stations are undefined, Then null is returned', () => {
        const mostEffectivePowerStation = forPowerStations()
            .findTheOneWithHighestPowerForCoordinates(1, 1);

        expect(mostEffectivePowerStation).toBeNull();
    });

    test('But no power stations have been specified, Then null is returned', () => {
        const mostEffectivePowerStation = forPowerStations([])
            .findTheOneWithHighestPowerForCoordinates(1, 1);

        expect(mostEffectivePowerStation).toBeNull();
    });

    test('And the nearest station provides the most power, Then this is the station that is returned', () => {
        const nearbyPowerStation = new PowerStation(0, 0, 3);
        const moreDistantPowerStation = new PowerStation(4, 4, 3);

        const mostEffectivePowerStation = forPowerStations([nearbyPowerStation, moreDistantPowerStation])
            .findTheOneWithHighestPowerForCoordinates(1, 1);

        expect(mostEffectivePowerStation).toBe(nearbyPowerStation);
    });

    test('And the it is not the nearest station that provides the most power, Then the station providing most power is returned', () => {
        const nearbyPowerStation = new PowerStation(0, 0, 3);
        const moreDistantPowerStation = new PowerStation(4, 4, 10);

        const mostEffectivePowerStation = forPowerStations([nearbyPowerStation, moreDistantPowerStation])
            .findTheOneWithHighestPowerForCoordinates(1, 1);

        expect(mostEffectivePowerStation).toBe(moreDistantPowerStation);
    });

    test('And no power stations are withing reach, Then null is returned', () => {
        const nearbyPowerStation = new PowerStation(0, 0, 1);

        const mostEffectivePowerStation = forPowerStations([nearbyPowerStation])
            .findTheOneWithHighestPowerForCoordinates(2, 2);

        expect(mostEffectivePowerStation).toBeNull();
    });

});