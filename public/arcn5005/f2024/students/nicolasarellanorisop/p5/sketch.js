function setup() {
  createCanvas(1300, 400);
}

function draw() {
  background(220);

  fill(255, 0, 128);
  rect(100, 100, 100, 100);

  stroke(255, 255, 255);
  fill(0, 0, 255);
  ellipse(150, 300, 150);

  fill(255, 255, 0);
  stroke(240, 50, 255);
  rect(300, 100, 200, 200);

  stroke(255, 255, 0);
  fill(0, 255, 0);
  rect(width - 100, height - 100, 50, 50);

  stroke(0, 255, 255);
  line(0, 100, 0, 100);

  translate(440, 50);

  let d = 70;
  let p1 = d;
  let p2 = p1 + d;
  let p3 = p2 + d;
  let p4 = p3 + d;

  stroke(255, 0, 0);
  strokeWeight(4);
  fill(255, 255, 0, 10);

  line(p3, p3, p2, p3);
  line(p2, p3, p2, p2);
  line(p2, p2, p3, p3);
  line(p2, p2, p3, p2);
  line(p3, p2, p3, p3);

  stroke(0, 255, 100);

  translate(300, 50);
  fill(255, 0, 255);
  triangle(30, 75, 58, 20, 86, 75);

  translate(200, 0);
  fill(128, 0, 255);
  stroke(128, 255, 0);
  ellipse(56, 46, 155, 55);

  translate(50, 150);
  fill(255, 128, 0);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
}

setup();

draw();
