var utils = new p5.Utils();

function setup() {
  createCanvas(700, 400);

  utils.enableRuler();
}

function draw() {
  background(220);

  rect(100, 100, 100, 100);

  stroke(0, 100, 155);

  rect(300, 100, 200, 200);

  fill(0, 255, 0);

  stroke(255, 255, 0);
  rect(width - 100, height - 100, 50, 50);

  stroke(0, 0, 255);
  line(0, 100, 0, 100);

  translate(140, 0);

  let d = 70;
  let p1 = d;
  let p2 = p1 + d;
  let p3 = p2 + d;
  let p4 = p3 + d;

  // Draw red box
  stroke(255, 0, 0);
  fill(255, 255, 0);
  line(p3, p3, p2, p3);
  line(p2, p3, p2, p2);
  line(p2, p2, p3, p2);
  line(p3, p2, p3, p3);

  ellipse(50, 300, 150);

  // Draw green points
  stroke(0, 255, 100);

  point(p1, p1);
  point(p1, p3);
  point(p2, p4);
  point(p3, p1);
  point(p4, p2);
  point(p4, p4);
}

setup();

draw();
