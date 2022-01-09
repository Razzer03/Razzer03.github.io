//Her er opskriften til brick lavet. Det er den, der giver alle brikkerne deres udseende og placering.
class brick {
  constructor(location, width, height, Color){
  this.location = location;
  this.width = width;
  this.height = height;
  this.c = color(Color);
  this.points = 1
    
  }
  
  //Når vi skal have vist brikekrne, bliver det med en rect og den får også en farve
  display(){
    fill(this.c);
    rect(this.location.x, this.location.y, this.width, this.height);
  }
  
  //Her er der kollisionsdetektion, den deffinere at hvis boldens kanter rammer nogle af brikkerne skal isColliding være true (som der bliver brugt til at fjerne brikken der er blevet ramt)
  isColliding(ball) {
    if(bold.bally - bold.ballwidth <= this.location.y + this.height &&
        bold.bally + bold.ballwidth >= this.location.y &&
        bold.ballx + bold.ballwidth >= this.location.x &&
        bold.ballx - bold.ballwidth <= this.location.x + this.width) {
          return true
        }
  }
}