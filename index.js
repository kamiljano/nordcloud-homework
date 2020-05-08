'use strict';

//TODO: add linter, export test result, audit stuff
//TODO: add github action to test this

module.exports = {
  ...require('./lib/powerStation'),
  ...require('./lib/powerStationSelector')
};