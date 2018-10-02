const assert = require("chai").assert;
const app = require("../rovers.js");
const findCompassIndex = app.findCompassIndex;
const testRover = { x: 3,
                    y: 5,
                    direction: 'S',
                    instructions: [ 'L', 'M', 'M', 'R', 'M', 'L', 'L', 'M', 'M' ],
                    compassIndex: '' };


describe('findCompassIndex', function() {
  it("should assign value of 2 to testRover.compassIndex", function() {
    let test = findCompassIndex(testRover.direction, testRover);
    let result = testRover.compassIndex;
    assert.equal(2, result);
  })
})

describe('movement', function() {
  it("should update testRover's x and y values, reaching final values of (5, 5)", function() {
    let test = movement(testRover.instructions, testRover);
    let result = (testRover.x, testRover.y);
    assert.equal((5, 5), result);
  })
})