const assert = require("chai").assert;
const app = require("../rovers.js");
const findCompassIndex = app.findCompassIndex;
const testRover = { x: 3,
                    y: 5,
                    direction: 'S',
                    instructions: [ 'L', 'M', 'M', 'R', 'M', 'L', 'L', 'M', 'M' ],
                    compassIndex: '' };


describe('findCompassIndex', function() {
  it("should assign value of 2 to r.compassIndex", function() {
    let test = findCompassIndex('S');
    let result = testRover.compassIndex;
    assert.equal(2, result);
  })
})