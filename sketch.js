var x = 0;
var y = 0;
var scaler = 10;
var goToMouseChance = 3;


function setup() {
  createCanvas(1000, 800);
  x = width / 2;
  y = height / 2;
  frameRate(30);
}

function draw() {
  background(255, 10);
  stroke(0);
  strokeWeight(2 * scaler);
  point(x, y);

  var xInc = 0;
  var yInc = 0;

  if (random(10) < goToMouseChance) {
    if (mouseX > x) {
      xInc = 1;
    } else if (mouseX < x) {
      xInc = -1;
    }
  } else {
    xInc = floor(random(-1, 2));
  }

  if (random(10) < goToMouseChance) {
    if (mouseY > y) {
      yInc = 1;
    } else if (mouseY < y) {
      yInc = -1;
    }
  } else {
    yInc = floor(random(-1, 2));
  }

  x = x + xInc * scaler;
  y = y + yInc * scaler;

  if (x < 0) {
    x += width;
  }
  if (x > width) {
    x -= width;
  }
  if (y < 0) {
    y += height;
  }
  if (y > height) {
    y -= height;
  }
}