let t = 0

function setup() {
  frameRate (60)
}

function draw() {
  createCanvas(c=400, c);
  background (255);
  blendMode (MULTIPLY);
  translate(c/2,c/2);
  for(var v=0; v<10;v++){
    fill(200);
    ellipse(0,0,v*35*sin(t+PI/12*v) ,v*30);
}
  t +=PI/100;
}