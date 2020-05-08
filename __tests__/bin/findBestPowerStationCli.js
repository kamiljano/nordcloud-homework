'use strict';

const { exec } = require('child_process');
const path = require('path');

const cliPath = path.resolve(__dirname, '..', '..', 'bin', 'cli.js');

const buildCommand = builder => {
  let command = `node "${cliPath}" `;

  if (builder.powerStations.length) {
      const powerStations = builder.powerStations.map(station => `${station.x},${station.y},${station.range}`);
      command += `-p ${powerStations.join(';')} `;
  }

  if (builder.yourLocation) {
      command += `-y ${builder.yourLocation.x},${builder.yourLocation.y}`;
  }

  return command;
};

module.exports.FindBestPowerStationCli = class {

    constructor() {
        this.powerStations = [];
    }

    withPowerStation(x, y, range) {
        this.powerStations.push({x, y, range});
        return this;
    }

    withYourLocation(x, y) {
        this.yourLocation = { x, y };
        return this;
    }

    execute() {
        return new Promise(resolve => {
            exec(buildCommand(this), (error, stdout, stderr) =>
                resolve({
                    code: error && error.code ? error.code : 0,
                    error,
                    stdout: stdout.trim(),
                    stderr: stderr
                        .split('\n')
                        //Filter out the messages that are automatically added to the stderr when running the application with a debugger
                        .filter(value => !value.toLowerCase().includes('debugger') && !value.toLowerCase().includes('https://nodejs.org'))
                        .join('\n')
                        .trim()
                })
            );
        });
    }

}