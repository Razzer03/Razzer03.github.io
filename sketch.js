var a = 0;
var i = 0;
var l = 0;
var x = 0;
var y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(130,255),50,100);
  strokeWeight(2);
  frameRate(3);
}

function draw() {
  if (i < 100) {
    var u = random(50,120);
    var x = random(windowWidth-120);
    var y = random(windowHeight-120);
    fill(random(100,255),random(100,255),random(100,255));
    rect(x,y,u,u);
    u=u/2;
    fill(random(100,255),random(100,255),random(100,255));
    rect(x,y,u,u);
    u=u/2;
    fill(255,255,0);
    rect(x,y,u,u);
    i=i+1
  }
  if (i == 100) {
    background(random(130,255),50,100);
    i=0;
  }
}