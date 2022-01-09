//Her er opskriften til brættet
class paddle {
  constructor(PosX, PosY, Width, Length, Color) {
    this.paddlex = PosX;
    this.paddley = PosY;
    this.paddlewidth = Width;
    this.paddlelength = Length;
    this.paddlec = color(Color);
  }

  //Brættet skal også kunne bevæge sig og den skal bevæge sig ud fra musens x placering. Det er også her der bliver sørget for, at brættet ikke kan komme ud af canvas, selvom at musen gør det
  move() {
    this.paddlex = mouseX-75;
    
    if(mouseX-75<=0){
       this.paddlex = 0;
    }
    if(mouseX+75>=width){
       this.paddlex = width-150;
    }
  
  }

  //Brættet farves med den givne farve, og et rektangel skabes med værdierne fra sketch.js, som blev givet til objektet. 
  display() {
    fill(this.paddlec);
    rect(this.paddlex, this.paddley, this.paddlewidth, this.paddlelength);
  }
}
