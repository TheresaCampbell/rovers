const fs = require("fs");
const input = fs.readFileSync(process.argv[2]).toString().split('\n');
const maxPosition = input[0].split(' ');
const maxPositionX = maxPosition[0];
const maxPositionY = maxPosition[1];
const rovers = [input.slice(1, 3), input.slice(3, 5)];
const compass = ['N', 'E', 'S', 'W'];


const findCompassIndex = (direction, r) => {
  for(i = 0; i < compass.length; i++) {
    if (compass[i] === direction) {
      r.compassIndex = i;
    }
  }
}


const movement = (instructions, r) => {
  for(i = 0; i < instructions.length; i++) {

    if (instructions[i] === 'L') {
      r.compassIndex -= 1;
      if (r.compassIndex < 0) {
        r.compassIndex = 3;
      }

    } else if (instructions[i] === 'R') {
      r.compassIndex += 1;
      if (r.compassIndex === compass.length) {
        r.compassIndex = 0
      }

    } else if (instructions[i] === 'M') {
      if (compass[r.compassIndex] === 'N') {
        r.y += 1;
        if (r.y > maxPositionY) {
          r.y = maxPositionY;
        }

      } else if (compass[r.compassIndex] === 'E') {
        r.x += 1;
        if (r.x > maxPositionX) {
          r.y = maxPositionX;
        }

      } else if (compass[r.compassIndex] === 'S') {
        r.y -= 1;
        if (r.y < 0) {
          r.y = 0;
        }

      } else if (compass[r.compassIndex] === 'W') {
        r.x -= 1;
        if (r.x < 0) {
          r.x = 0;
        }
      }
    }
  }
}

const solve = () => {
  rovers.forEach(function(r) {
    rover = {
      x: Number(r[0].split(' ')[0]),
      y: Number(r[0].split(' ')[1]),
      direction: r[0].split(' ')[2],
      instructions: r[1].split(""),
      compassIndex: ''
    };
    findCompassIndex(rover.direction, rover);
    movement(rover.instructions, rover);
    let output = (rover.x + ' ' + rover.y + ' ' + compass[rover.compassIndex]);
    console.log(output);
  })
}

solve();

module.exports = {findCompassIndex: findCompassIndex, movement: movement};