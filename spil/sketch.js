//Variabler til de forskellige objekter, samt spillets stadie, defineres.
let bold;
let bræt;
let gameState;
let veje = [-1,1];

//I starten køres følgende kode, som laver et canvas på størrelse med skærmen, tegner kasserne, bolden og brættet samt vælger en tilfældig retning, bolden skydes afsted i.
function setup() {
  createCanvas(400, 400);
  gameState = 'Spiller';
  
  bold = new ball(width/2, height/2, 15, 15, 5, "red");
  bræt = new paddle(mouseX,300,150,25,"black");
  
  bricks = createBricks()
  vejx = 0
  vejy=random(veje)
}

//Funktionen bliver brugt til at lave klodserne i toppen af skærmen. Klodsernes værdier gemmes i et array. Derudover er der variabler, som definerer antallet af kolonner og rækker.
function createBricks() {
  const bricks = []
  const rows = 5
  const bricksPerRow = 5
  const brickWidth = width / bricksPerRow
  for (let row = 0; row < rows; row++) {
    for (let i = 0; i < bricksPerRow; i++) {
      brickTmp = new brick(createVector(brickWidth * i, 25 * row), brickWidth, 25, "blue")
      bricks.push(brickTmp) 
    }
  }
  return bricks
}

//Funktionen draw kører hele tiden, når spillet er startet.
function draw() {
  //Til at starte med tjekkes der, om spillet er i gang eller ej i en if-løkke. Hvis spillet kører, så tegnes bolden, brættet og klodserne. 
  if(gameState === 'Spiller'){
  background(220);
  
  bold.ballx = bold.ballx + (vejx*bold.ballspeed);
  bold.bally = bold.bally + (vejy*bold.ballspeed);
  
  bold.move();
  bold.display();
  bold.finish()
  
  bræt.display();
  bræt.move();
    
//Denne for-løkke tegner klodserne i toppen. Den tegner dem fra det array, som er defineret tidligere i koden. Hvis bolden rammer en klods, så fjernes klodsen fra arrayet og bolden skifter retning.
  for (let i = bricks.length - 1; i >= 0; i--) {
    const brick = bricks[i];
      if (brick.isColliding(ball)) {
        bricks.splice(i, 1)
        vejy = vejy *-1;
      } else {
        brick.display()
      }
    }
  
//Hvis bolden har ramt bunden, så skifter spillets stadie til "tabte". 
    if(bold.finished==true){
    gameState = 'tabte'
   }

//If-løkken tjekker for, om man  har ramt alle klodserne, så arrayet nu er tomt. Hvis det er tilfældet, så skifter spillets stadie til "vandt". Hvis det ikke er tilfældet, så tjekker den for, om spillets stadie er "tabte". Hvis stadiet er "tabte", så stopper spillet, og man få at vide, at man kan genstarte spillet. Teksten farves rød, hvis stadiet er "tabte". Vinder man, så vælger programmet af farve teksten med den grønne farve, og den skriver, at man har vundet. 
    if (bricks.length === 0) {
      gameState = 'vandt'
    }
  } else {
    textAlign(CENTER);
    textSize(50)
    gameState === 'tabte' ? fill(255,20,90) : fill(110,255,7);
    text(`Du ${gameState}!!!`, width / 2, height / 2);
    textSize(20);
    text(`Tryk på mellemrumstasten for at prøve igen`, width/2, height-50)
  }
 }

