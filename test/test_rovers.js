const assert = require("chai").assert;
const rovers = require("../rovers.js");

const x = rovers.x;
const y = rovers.y;
const startDirection = rovers.startDirection;
const rover = ['3 5 E', 'LMMRMLMRRM'];

describe('x', function() {
  it('should return the x coordinate', function() {
    assert.equal(x(rover), rover[0].split(' ')[0]);
  });
});

describe('y', function() {
  it('should return the y coordinate', function() {
    console.log("Y Rover Function: ", y(rover));
    assert.equal(y(rover), rover[0].split(' ')[1]);
  });
});

describe('startDirection', function() {
  it('should return the direction the rover begins facing', function() {
    assert.equal(startDirection(rover), rover[0].split(' ')[2]);
  });
});

