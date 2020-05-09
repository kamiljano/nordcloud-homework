![Test application](https://github.com/kamiljano/nordcloud-homework/workflows/Test%20application/badge.svg?branch=master)

# About

The application finds the power station with that gives you the most power based
on the coordinates and range of the power station and your coordinates.

# Requirements

The application requires [NodeJS +12.x](https://nodejs.org/en/download/).

# Installation

To run the project from your computer go to the project directory and run the
following commands

```
npm ci
npm install -g
```

This will install the binary globally. From this point on you can simply 
use the command `find-best-power-station` to execute the application.

# Testing

To test the project execute simple `npm test`.
This will trigger all unit and integration tests as well as generate 
a test report at `./testReport.html` that you can publish from github actions.
Moreover a test coverage report is generated at `./coverage`. That's another useful thing to export from
your build job.

# Usage

When in doubt, you can always execute `find-best-power-station --help`, 
which will give you the following output:

```
Usage: find-best-power-station [options]

Options:
  -V, --version                         output the version number
  -p, --power-stations <power>          Semicolon-separated power stations in the format <X-coordinate,Y-coordinate,Range>
  -y, --your-coordinates <coordinates>  Your coordinates in the format <X-coordinate,Y-coordinate>
  -h, --help                            display help for command

```

# Example successful execution

```
$ find-best-power-station -p "0,0,10;0,5,10" -y "0,1"
Best link station for point 0,1 is 0,0 with power 81
```
