//Her bliver nogle variabler oprettet, som skal bruges til boldens bevægelse
let vejx;
let vejy;

//Der bliver her lavet en opskrift på ball hvilket man så kan bruge til at lave bolden inde i spillet
class ball {
  //I constructoren giver vi bolden nogle værdier, som vi kan ændre på, så bolden enten ændrer udseende, fart eller placering
  constructor(PosX, PosY, Width, Length, Speed, Color) {
    this.ballx = PosX;
    this.bally = PosY;
    this.ballwidth = Width;
    this.balllength = Length;
    this.ballspeed = Speed;
    this.ballc = color(Color);
    this.finished = false;
  }

  //Nu bliver ball givet nogle egenskaber, her bliver den givet move(), som vil bruger til at bestemme boldens bevæglese
  move() {
    //Der bliver oprettet en variable med et array, som senere bliver brugt til at bestemme boldens retning.
    let veje = [-1,1]
    
    //Her bliver der gjort således at bolden ikke kan ryge ud af canvas, og at den skifter retning når den rammer
    //Dette er kun gjort med toppen og de to sider, da hvis den rammer bunden, så har man tabt.
    if(this.ballx<7.5){
      vejx=vejx*-1;
    }
    if(this.ballx>width-7.5){
      vejx=vejx*-1;
    }
    if(this.bally<7.5){
      vejy=vejy*-1;
    }
    
    //Man skal nu også have den til at skifte retning, hvis den rammer brættet
    if(this.bally>=windowHeight-100 && this.ballx > mouseX && this.ballx <= mouseX + 75){
      vejy=vejy*-1;
      if(vejx==0){
        vejx=random(veje);
      }
      if(vejx<0 || vejx>0){
        vejx=vejx*1
      }
    }
    if(this.bally>=windowHeight-100 && this.ballx < mouseX  && this.ballx >= mouseX -75){
      vejy=vejy*-1;
      if(vejx==0){
        vejx=random(veje);
      }
      if(vejx<0 || vejx>0){
        vejx=vejx*1
      }
    }
    
    
  }

  //Bolden skal også blive vist på skærmen og det gør man ved at give den en form (her er det ellipse) og give den en farve (fill)
  display() {
    fill(this.ballc);
    ellipse(this.ballx, this.bally, this.ballwidth, this.balllength);
  }

  //Der skal nu også bestemmes hvad der skal gøres hvis at bolden ikke rammer brættet, så hvis den ryger under brættet bliver this.finished sat til true, som vi bruger at vide hvornår spillet er færdigt
  finish() {
    if (this.bally >= windowHeight - 80 && !this.finished) {
    this.finished = true;
    vejx=0;
    vejy=0;
    }
  }
}
