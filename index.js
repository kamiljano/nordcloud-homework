'use strict';

//TODO: add linter, export test result, audit stuff
//TODO: add docs
//TODO: add github action to test this
//TODO: add the test coverage report

module.exports = {
  ...require('./lib/powerStation'),
  ...require('./lib/powerStationSelector')
};