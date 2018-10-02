# Rovers

Two Mars rovers on a grid-like plateau need YOUR help to know where they should "rove" to! Delivering instructions via the command line, tell them which moves to make and see where they end up.

## Setup

1. Fork & Clone
2. In the command line, run `npm install` to install dependencies
3. Directions for the rovers are also specified in the command line. A sample .txt file exists in the working directory for you to use, but feel free to use it as an example to create your own directions. To use the sample directions, run `node rovers.js directions.txt`
4. The output will be each rover's final position: its x coordinate, y coordinate, and compass direction which it is facing. The output for `directions.txt` is `1 3 N\5 1 E`

## Challenges

* Testing

  * All of the testing I've previously done has been part of assignments in school, which means that it was partially set up before I even started. I spent a long time puzzling about how to get my code and test files to talk to each other. The solution I came up with was different than any school assignments and curiously different than most examples I found online. I think this might be due to having different dependencies installed.

* Modularity

  * The easiest way to produce the correct output (and what I first did when I just started playing with the assignment) was to toss almost every piece of code into one massive forEach(). This meant that the code was difficult to re-work if need be and impossible to test. In a separate file, I played around with a few re-factoring possibilities.

  I tried making a Rover class, which each rover would be an instance of and each method would be chained and called in one line of code. This proved messy as updating a rover's x coordinate, for example, would involve specifying this.currentRover.x every time.

  I also tried turning each of those methods into standalone functions that, as their last operation, called each other. This was difficult to test because the functions weren't really isolated from one another.

  I decided to have completely separate functions (nice and testable) that are all called from a forEach() after the rovers are established in that same forEach(). I know the code could still be more modular, but I'm happy with where it's at (and where I'm at as I learn to write cleaner code!)

## Dependencies

* Mocha
* Chai