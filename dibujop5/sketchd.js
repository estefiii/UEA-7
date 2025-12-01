function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgba(195, 198, 254, 1)");
  noStroke();

  // tallo
  fill("#7ed957");
  rect(195, 220, 15, 150, 10);

  // pétalos
  fill("#9f4275ff");
  ellipse(200, 170, 120, 120);
  ellipse(140, 170, 120, 120);
  ellipse(260, 170, 120, 120);
  ellipse(200, 230, 120, 120);
  ellipse(200, 110, 120, 120);

  // centro flor
  stroke("#4a1f33");     // color del contorno
  strokeWeight(3);       // grosor
  fill("#e5ce5fff");
  ellipse(200, 170, 100, 100);

}
