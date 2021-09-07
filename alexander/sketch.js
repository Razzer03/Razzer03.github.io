var tileCount = 30; //Referrer til 
var actRandomSeed = 0;

var circleAlpha = 130; //Gennemsigtigheden er fra start af sat til 130, men kan ændres da det er en var//
var circleColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();//Cirklerne får ingen farve// 
  circleColor = color(random(230), 0, random(230 ), circleAlpha); //Refferer til var circleAlpha//
}

function draw() {
  translate(width / tileCount / 2, height / tileCount / 2);

  background(255);

  randomSeed(actRandomSeed);

  stroke(circleColor); //Giver cirklen en stroke med farven cirkleAlpha//
  strokeWeight(mouseY / 100); //Dividere musens y-værdi med 60//




  for (var gridY = 0; gridY < tileCount; gridY++) { //gridY er sat til 0, og fortætter sålænge tileCount er større. Hver gang gridY er større adderes der 1//
    for (var gridX = 0; gridX < tileCount; gridX++) { //gridX er sat til 0, og fortætter sålænge tileCount er større. Hver gang gridX er større adderes der 1//

      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;

      var shiftX = random(-mouseX, mouseX) / 10; 
      var shiftY = random(-mouseX, mouseX) / 10;

      ellipse(posX + shiftX, posY + shiftY, mouseY / 15, mouseY / 15); //Første to referrer til poition og næste referrer til størrelse//
    }
  }

if (keyIsPressed){
  if (keyCode === 83){
    fill(0)
    rect(-100,-100,10000, 10000)
  }
}
if (keyIsPressed){
  if (keyCode === 65){
    fill(255)
  }
}

if (keyIsPressed){
  if (keyCode === 49){
    tileCount = 10
  }
}

if (keyIsPressed){
  if (keyCode === 50){
    tileCount = 20
  }
}

if (keyIsPressed){
  if (keyCode === 51){
    tileCount = 30
  }
}



}


function mousePressed() {
  actRandomSeed = random(1000000); //Positionere Cirklerne i en tilfældig position//
}



