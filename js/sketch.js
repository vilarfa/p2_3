let boques=["👅","👄","🐽"];
let p1;
function setup() {
  createCanvas(400, 400);
  p1= new Pardal(width,100,ceil(random(-1,2)));
  for(let i=0; i<30; i++){
  p1[i]=new Pardal(width, random(height), ceil(random(-1,2)));
}
}

function draw() {
  background("#0046FF");
  p1.show();
  p1.move();

  
}
class Pardal{
  constructor(x,y,rb){
    this.x=x;
    this.y=y;
    this.rab=rb;
    
      }

  show(){
    strokeWeight(2)
  scale(0.5);
  translate(this.x,this.y);
  push();
  fill("#FF23D2");
  triangle(0,200,100,200,100,150);
  ellipseMode(CORNER);
  fill("#FEFF00");
  ellipse(100,140,150,75);
  textSize(40);
  text("👀",140,160);
  text(boques[this.rab],140,190);
      pop();
  }
   move(){
    this.x=this.x-1;
     if(this.x<0){
       this.x=width+250;
     }    
   }
}