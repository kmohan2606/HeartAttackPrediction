Bangle.setOptions
({
  wakeOnBTN1: true,
  wakeOnFaceUp: false,
  wakeOnTwist: false,
  powerSave: true,
  lockTimeout: 10000,
  lcdPowerTimeout: 0,
  backlightTimeout: 10000,
  hrmPollInterval: 40,
});

// g.clear();
// var x = 176/2, y = 176/2, r1 = 60, r2 = 85;
// var steps = 24;

//remember 2pi is a full circle in radians
//so the angle for each slice is the step we are on times 2pi divided by the total number of steps
//i.e. angle = (step*2pi)/steps, where step is the current step, and steps is the total number of steps

// let angle = (Math.PI*2)/steps;

//for the coordinates of the circle, we use polar coordinates rather than cartesian coordinates.
//we use Math.sin and Math.cos to calculate the x and y values, respectively, for each point in the circle,
//xInner = x + r1*Math.sin(angle), yInner = y + r1*Math.cos(angle)
//xOuter = x + r2*Math.sin(angle), yOuter = y + r2*Math.cos(angle)

g.clear();

var incAmt = 0.25;
var trackedSteps = 1426;
var stepsProgress = trackedSteps / 10000;

g.setFont("12x20");
g.setFontAlign(0,0,0);
g.drawString(trackedSteps, 176/2, 176/2);

function drawSlice(start, end) {
  var angle, steps = 24;
  var x = 176/2, y = 176/2, innerRadius = 60, outerRadius = 80;
  var polyCoords = [];
  for (var cStep = start*steps; cStep < end*steps; cStep++) {
    angle = cStep*Math.PI*2/steps;
    polyCoords.push(x + outerRadius*Math.cos(angle), y + outerRadius*Math.sin(angle));
    polyCoords.unshift(x + innerRadius*Math.cos(angle), y + innerRadius*Math.sin(angle));
  }

  angle = end*Math.PI*2;
  polyCoords.push(x + outerRadius*Math.cos(angle), y + outerRadius*Math.sin(angle));
  polyCoords.unshift(x + innerRadius*Math.cos(angle), y + innerRadius*Math.sin(angle));
  g.fillPoly(polyCoords);
}

g.setColor(0,1,0);
drawSlice(0.25, stepsProgress + 0.25);
g.setColor(1,0,0);
drawSlice(stepsProgress + 0.25, 1.25);