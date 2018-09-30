const fs = require("fs");

fs.readFile('directions.txt', (err, data) => {
  if (err) throw err;

  const input = data.toString().split('\n');
  console.log("Array of Instructions: ", input);

  const maxPosition = input[0].split(' ');
  console.log("Max Position on Grid: ", maxPosition);

  const maxPositionX = maxPosition[0];
  console.log("Max X Position: ", maxPositionX);

  const maxPositionY = maxPosition[1];
  console.log("Max Y Position: ", maxPositionY);

  const startPosition = input[1].split(' ');
  console.log("Start Position: ", startPosition);

  let x = Number(startPosition[0]);
  let y = Number(startPosition[1]);
  let startDirection = startPosition[2];
  console.log("X: ", x, " Y: ", y, " Starting Direction: ", startDirection);

  const instructions = input[2].split("");
  console.log("Instructions: ", instructions);


})