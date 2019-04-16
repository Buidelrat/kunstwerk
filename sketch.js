var cirkelDiameter = 30 //soort 'laatje'waarop staat wat er in zit

function setup() { // hoe het wordt opgezet.
  createCanvas(windowWidth, windowHeight); // scherm en grootte
  background(50); //achtergrondkleur
}

function draw() { //in deze functie staat alles wat je tekent
  noFill(); //niet inkleuren
  stroke(255); //randkleur
  strokeWeight(8); //dikte van de rand
  if (mouseY > height/2) { //if:controleer of iets zo is. (coordinaten muis)
    line(60, 100, 60, 300); //voorbeelden van een functie. line(x1, y1, x2, y2)
    line(60, 100, 170, 170);
    line(170, 170, 270, 100);
    line(270, 100, 270, 300);
    
    line(370, 100, 370, 300);
    line(370, 100, 480, 170);
    line(480, 170, 370, 200);
    line(370, 200, 470, 250);
    line(470, 250, 370, 300);
    
    circle(550, 190, 20); //voorbeelden van een functie. circle(x, y, r)
    circle(650, 190, 20); 
    arc(600, 250, 100, 50, 0, PI); // arc(x, y, w, h) PI:gesloten cirkelsegment
    //wordt samen een smiley
  }
  
  
  
  noStroke(); //geen rand
  fill(random() * 255, random() * 255, random() * 255); //kleur random in alle kleuren
  circle(random()*700, random()*400, cirkelDiameter); //circle random plaatsen tussen y:400 en x:700. cirkelDiameter is een variable
  
  
  
  
} //einde
