const fs = require("fs");

fs.readFile('directions.txt', (err, data) => {
  if (err) throw err;

  const input = data.toString().split('\n');
  console.log("Array of Instructions: ", input);

  const maxPositionX = input[0].split(' ')[0];
  console.log("Max X Position: ", maxPositionX);

  const maxPositionY = input[0].split(' ')[1];
  console.log("Max Y Position: ", maxPositionY);

  let x = Number(input[1].split(' ')[0]);
  let y = Number(input[1].split(' ')[1]);
  let startDirection = input[1].split(' ')[2];
  console.log("X: ", x, " Y: ", y, " Starting Direction: ", startDirection);

  const instructions = input[2].split("");
  console.log("Instructions: ", instructions);


})