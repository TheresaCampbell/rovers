const assert = require("chai").assert;
const rovers = require("../rovers.js");

const x = rovers.x;
const y = rovers.y;
const rover = ['3 5 E', 'LMMRMLMRRM'];

describe('x', function() {
  it('should return the x coordinate', function() {
    assert.equal(x(rover), rover[0].split(' ')[0]);
  });
});

describe('y', function() {
  it('should return the y coordinate', function() {
    assert.equal(y(rover), rover[0].split(' ')[1]);
  });
});
