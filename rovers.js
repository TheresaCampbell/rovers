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
console.log("Compass Index: ", compassIndex);