// Sample Rover Directions: [ '1 2 N', 'LMLMLMLMM' ]

const fs = require("fs");
const input = fs.readFileSync('directions.txt').toString().split('\n');

const maxPosition = input[0].split(' ');
const maxPositionX = maxPosition[0];
const maxPositionY = maxPosition[1];
const rovers = [input.slice(1, 3), input.slice(3, 5)];
const compass = ['N', 'E', 'S', 'W'];

rovers.forEach(function(rover) {
  const startPosition = rover[0].split(' ');
  let x = Number(startPosition[0]);
  let y = Number(startPosition[1]);
  const direction = startPosition[2];

  const instructions = rover[1].split("");

  let compassIndex = '';

  for(i = 0; i < compass.length; i++) {
    if (compass[i] === direction) {
      compassIndex = i;
    }
  }

  for(i = 0; i < instructions.length; i++) {
    if (instructions[i] === 'L') {
      compassIndex -= 1;
      if (compassIndex < 0) {
        compassIndex = 3;
      }
    } else if (instructions[i] === 'R') {
      compassIndex += 1;
      if (compassIndex === compass.length) {
        compassIndex = 0
      }
    } else if (instructions[i] === 'M') {
      if (compass[compassIndex] === 'N') {
        y += 1;
        if (y > maxPositionY) {
          y = maxPositionY;
        }
      } else if (compass[compassIndex] === 'E') {
        x += 1;
        if (x > maxPositionX) {
          y = maxPositionX;
        }
      } else if (compass[compassIndex] === 'S') {
        y -= 1;
        if (y < 0) {
          y = 0;
        }
      } else if (compass[compassIndex] === 'W') {
        x -= 1;
        if (x < 0) {
          x = 0;
        }
      }
    }
  }

  let output = (x + ' ' + y + ' ' + compass[compassIndex]);
  console.log(output);

})

module.exports = {};