'use strict';

const { FindBestPowerStationCli } = require('./findBestPowerStationCli');

describe('Given the find-best-power-station tool', () => {

    test('When entering the valid parameters, Then the valid result is printed out', async () => {
        const result = await new FindBestPowerStationCli()
            .withPowerStation(0, 0, 10)
            .withPowerStation(0, 5, 10)
            .withYourLocation(0, 1)
            .execute();

        expect(result.code).toBe(0);
        expect(result.stdout).toEqual('Best link station for point 0,1 is 0,0 with power 81');
    });

    test('When entering the power stations with an invalid value, Then the application exits with error 2 and the message specifying the wrong coordinates format is displayed', async () => {
        const result = await new FindBestPowerStationCli()
            .withPowerStation(0, 0, 10)
            .withPowerStation(0, 5, 'lol')
            .withYourLocation(0, 1)
            .execute();

        expect(result.code).toBe(2);
        expect(result.stderr).toEqual('The coordinates with range "0,5,lol" are in a wrong format');
    });

    test('When no power plant has been provided, Then the application executes successfully, but the message indicates, that no power stations are within the reach', async () => {
        const result = await new FindBestPowerStationCli()
            .withYourLocation(0, 1)
            .execute();

        expect(result.code).toBe(0);
        expect(result.stderr).toEqual('No link station within reach for point 0,1');
    });

    test('When skipping your location, Then the application exists with error code 1 and a message about the missing parameter is displayed', async () => {
        const result = await new FindBestPowerStationCli()
            .withPowerStation(0, 0, 10)
            .execute();

        expect(result.code).toBe(1);
        expect(result.stderr).toEqual('error: required option \'-y, --your-coordinates <coordinates>\' not specified');
    });

    test('When specifying your location in an incorrect format, Then the application exists with error code 3 and a message about invalid coordinates is displayed', async () => {
        const result = await new FindBestPowerStationCli()
            .withPowerStation(0, 0, 10)
            .withYourLocation(0, 'lol')
            .execute();

        expect(result.code).toBe(3);
        expect(result.stderr).toEqual('The coordinates "0,lol" are in a wrong format');
    });

});