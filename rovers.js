const fs = require("fs");
const input = fs.readFileSync('directions.txt').toString().split('\n');
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

}

rovers.forEach(function(r) {
  rover = {
    x: Number(r[0].split(' ')[0]),
    y: Number(r[0].split(' ')[1]),
    direction: r[0].split(' ')[2],
    instructions: r[1].split(""),
    compassIndex: ''
  };
  // console.log("Rover: ", r);
})


//   for(i = 0; i < instructions.length; i++) {
//     if (instructions[i] === 'L') {
//       compassIndex -= 1;
//       if (compassIndex < 0) {
//         compassIndex = 3;
//       }
//     } else if (instructions[i] === 'R') {
//       compassIndex += 1;
//       if (compassIndex === compass.length) {
//         compassIndex = 0
//       }
//     } else if (instructions[i] === 'M') {
//       if (compass[compassIndex] === 'N') {
//         y += 1;
//         if (y > maxPositionY) {
//           y = maxPositionY;
//         }
//       } else if (compass[compassIndex] === 'E') {
//         x += 1;
//         if (x > maxPositionX) {
//           y = maxPositionX;
//         }
//       } else if (compass[compassIndex] === 'S') {
//         y -= 1;
//         if (y < 0) {
//           y = 0;
//         }
//       } else if (compass[compassIndex] === 'W') {
//         x -= 1;
//         if (x < 0) {
//           x = 0;
//         }
//       }
//     }
//   }

//   let output = (x + ' ' + y + ' ' + compass[compassIndex]);
//   console.log(output);



module.exports = {findCompassIndex: findCompassIndex, movement: movement};