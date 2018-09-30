const fs = require("fs");

fs.readFile('directions.txt', (err, data) => {
  if (err) throw err;

  const array = data.toString().split('\n');
  console.log("Array of directions: ", array);
})