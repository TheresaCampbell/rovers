const fs = require("fs");

const input = fs.readFileSync('directions.txt').toString().split('\n');
console.log("Array of Instructions: ", input);

const maxPositionX = input[0].split(' ')[0];
const maxPositionY = input[0].split(' ')[1];

let x = Number(input[1].split(' ')[0]);
let y = Number(input[1].split(' ')[1]);

let startDirection = input[1].split(' ')[2];
console.log("X: ", x, " Y: ", y, " Starting Direction: ", startDirection);

const instructions = input[2].split("");
console.log("Instructions: ", instructions);

const compass = ['N', 'E', 'S', 'W'];

let compassIndex = '';

for(i = 0; i < compass.length; i++) {
  if (compass[i] === startDirection) {
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
console.log("Final Position: ", x, y, compass[compassIndex]);
}