//Alle variabler der skal bruges i sketch.js bliver deffineret her og evt. gives der en værdi
let bold;
let bræt;
//bricks bliver lavet til et array, så man både kan lave flere bricks og fjerne dem, hvis de bliver ramt
let bricks = [];
//gamestate er med til at vide om du har vundet eller tabt.
let gameState;
//Her laver vi en værdi for ens score, som så ændrer sig hver gang at man rammer en af brikkerne
let playerScore = 0


function setup() {
  //Canvas bliver tilpasset til vinduets størrelse
  createCanvas(windowWidth, windowHeight);
  //Gamestate bliver defineret til Spiller. Det vil sige at når gameState = 'Spiller', så er spillet i gang.
  gameState = 'Spiller';

  //Bolden bliver lavet ved brug af constructoren: bold = new ball(PosX, PosY, Bredde, Længde, Fart, Farve)
  bold = new ball(width/2, height/2, 15, 15, 5, "red");
  //Brættet bliver lavet ved brug af constructoren:  bræt = new paddle(PosX, PosY, Bredde, Længde, Farve)
  bræt = new paddle(mouseX,windowHeight-100,150,25,"black");
  
  //Vi bestemmer nu, at når bricks bliver kaldt, så vil funktion createBricks begynde
  bricks = createBricks()
  //Disse to variabler er med til at få bolden til at bevæge sig
  vejx = 0
  vejy=1
}

//Her har vi funktionen createBricks som er den funktion som laver alle brikkerne
function createBricks() {
  //Vi definerer nu nogle ting, som skal være med til at bestemme for mange rækker og hvor mange brikker, der skal være i hver række.
  const bricks = []
  const rækker = 4
  const brikkerPerRække = 6
  const brickWidth = width / brikkerPerRække
  //Her der bliver der laver et loop sådan så at brikkerne bliver lavet i rækker.
  for (let række = 0; række < rækker; række++) {
    for (let i = 0; i < brikkerPerRække; i++) {
      brickTmp = new brick(createVector(brickWidth * i, 50 * række), brickWidth, 50, "blue")
      bricks.push(brickTmp) 
    }
  }
  return bricks
}

//Her har vi funktionen draw, som er den der tegner hele spilllet op, og gør så vi kan se alt bevæge sig
//Grunden til at der står ball inden i funktionens parantens, er fordi vi skal kalde nogle af ball.js egenskaber
function draw(ball) {
  //Vi bestemmer nu at hvis gameState==='Spiller' så skal spillet køre.
  if(gameState === 'Spiller'){
  background(220);
  
  //Her bestemmer vi boldens bevægelse
  bold.ballx = bold.ballx + (vejx*bold.ballspeed);
  bold.bally = bold.bally + (vejy*bold.ballspeed);
  
  //Ud fra objektet bold som er blevet lavet giver vi den nu nogle egenskaber, som er blevet bestemt inde i ball.js
  bold.move();
  bold.display();
  bold.finish()
  
  //Det samme sker med brættet, som er blevet bestemt i paddle.js
  bræt.display();
  bræt.move();
 
  //Det er her hvor vi har "kollisionsdetektion". Her bringer vi nogle af brick.js funktioner fx brick.isColliding(ball) som bestemmer hvis bolden rammer nogle af brikkerne
  for (let i = bricks.length - 1; i >= 0; i--) {
    const brick = bricks[i];
      if (brick.isColliding(ball)) {
        //Bricks.splice bruger vi til at fjerne nogle af brikkerne i arrayet, når de rammes.
        bricks.splice(i, 1)

        //Her øges scoren med 1 mere da brick.points = 1
        playerScore += brick.points

        //Når bolden rammer nogle af brikkerne skal den skifte vej, det ses her
        vejy = vejy *-1;
      } else {
        //Hvis brick.isColliding(ball) ikke er "sand", så skal den bare vise de brikker der er tilbage i arrayet
        brick.display()
      }
      //Hvis en brik fx bliver ramt inden den er vist ville spillet stoppe, dette undgår vi her ved at sige at hvis den er ramt men ikke er til stede så skal den bare vise de resternde brikker
      if(bricks[i] != null){
      bricks[i].display();
      }
    }

    textSize(32)
    fill(255)
    text(`Point: ${playerScore}`, width - 150, 50)
  
    //Her bringer vi en af ball.js egenskaber ind, det er hvis man ikke rammer brættet, så hvis man altså har tabt, så sætter den gameState til at være at man tabte
    if(bold.finished==true){
    gameState = `tabte med ${playerScore} point`
   }
    
   //Det samme gælder her at hvis der ikke er flere brikker tilbage sætter den gameState til at vinde
    if (bricks.length === 0) {
      gameState = `vandt med ${playerScore} point`
    }
    //Her bliver der nu sagt at hvis gameState enten er at man har vundet eller tabt så skal den vise en teskt, som siger om man har vundet eller tabt og hvor mange point du havde
  } else {
    textAlign(CENTER);
    textSize(50)
    gameState === `tabte med ${playerScore} point` ? fill(255,20,90) : fill(110,255,7);
    text(`Du ${gameState}!!!`, width / 2, height / 2);
    textSize(20);
    text(`Refresh siden for at prøve igen`, width/2, height-50)
  }
 }
