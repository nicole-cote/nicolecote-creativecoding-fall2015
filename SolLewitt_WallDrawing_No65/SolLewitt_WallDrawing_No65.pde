//Sol Lewitt line drawing exercise from www.solvingsol.com. Used assistance from tutorials on www.processing.org.

void setup() {
  size(300,200);
  smooth();
 
}
 
void draw() {
background(255);//white background

stroke(220,220,0);
curve(40,40, 0, 0, mouseX, mouseY, 60, 170); 
/*interactive yellow curve; created so viewer can add their own line, and be a part of
making the art, the randomness of the lines, and to reflect Sol Lewitt's idea of anyone making his drawings.*/
  curve(40,40, 300, 0, 0, 275, 100, 150); //yellow curve
  curve(20,30, 70, 0, 0, 50, 170, 180); //yellow curve
  curve(0,0, 175, 200, 300, 140, 170, 180); //yellow curve
  curve(40,40, 0, 270, 0, 200, 100, 110); //yellow curve
  curve(20,30, 0, 100, 300, 200, 150, 160); //yellow curve
  curve(10,20, 0, 150, 50, 200, 100, 110); //yellow curve
  curve(80,80, 0, 80, 80, 200, 100, 300); //yellow curve
  curve(50,80, 230, 0, 200, 200, 160, 170); //yellow curve
  curve(20,40, 175, 0, 50, 200, 50, 70); //yellow curve
  curve(20,30, 45, 0, 130, 200, 40, 60); //yellow curve
  curve(40,40, 300, 45, 240, 200, 160, 170); //yellow curve
  curve(10,50, 0, 10, 275, 200, 150, 180); //yellow curve
  curve(0,40, 0, 150, 300, 20, 150, 190); //yellow curve
  curve(40,60, 0, 90, 300, 75, 50, 80); //yellow curve
  curve(20,45, 0, 120, 120, 0, 80, 100); //yellow curve

stroke(255,0,0);
noFill();
  arc(0,0, 200, 100, 0, PI); //red arc
  arc(50,50, 200, 100, - PI / 6, PI / 6); //red arc
  arc(75,75, 80, 200, -PI, 0); //red arc
  arc(175,35, 150, 100, PI/3, PI / 2.0); //red arc
  arc(105,105, 150, 200, -PI, PI / 2.0); //red arc
  arc(105, 105, 70, 100, PI / 2, 3*PI / 2.0); //red arc
  arc(300, 200, 200, 100, 5*PI/3, 5*PI/6); //red arc
  arc(245, 150, 175, 90, PI/4, 5*PI/3); //red arc
  arc(280, 180, 230, 180, PI, PI/3); //red arc
  arc(300, 280, 300, 200, PI / 6, 5*PI / 4.0); //red arc
  arc(300, 200, 200, 90, 0, 3*PI / 2.0); //red arc
  arc(10, 200, 100, 100, 4*PI/3, PI/2); //red arc
  arc(0, 200, 200, 170, 3*PI/2, 2*PI/3); //red arc
  arc(300, 10, 175, 120, 7*PI / 6, PI / 4.0); //red arc
  arc(15, 100, 50, 50, 3*PI / 2, 3*PI / 4.0); //red arc
  arc(80, 80, 200, 100, PI / 2, 3*PI / 2.0); //red arc  

stroke(0,0,200);
noFill(); 
  curve(40,40, 80, 200, 300, 105, 60, 170); //blue curve
  curve(80,80, 100, 200, 180, 0, 60, 100); //blue curve
  curve(100,100, 150, 0, 0, 100, 75, 170); //blue curve
  curve(150,40, 75, 0, 250, 200, 80, 170); //blue curve
  curve(200,200, 205, 0, 300, 80, 160, 200); //blue curve
  curve(200,300, 180, 0, 260, 0, 60, 170); //blue curve
  curve(150,200, 10, 200, 175, 0, 150, 170); //blue curve
  curve(180,30, 50, 0, 100, 200, 100, 200); //blue curve
  curve(300,200, 200, 200, 190, 0, 200, 170); //blue curve
  curve(0,0, 140, 0, 300, 175, 200, 200); //blue curve
  curve(60,40, 250, 0, 40, 200, 200, 170); //blue curve
  curve(20,40, 275, 200, 10, 0, 100, 100); //blue curve
  curve(10,20, 300, 140, 70, 0, 140, 150); //blue curve
  curve(150,250, 300, 30, 10, 200, 100, 170); //blue curve
  curve(0,20, 0, 100, 300, 0, 100, 110); //blue curve

stroke(0,130,0);
noFill();
  curve(10,90, 100, 200, 250, 150, 100, 170); //green curve
  curve(40,40, 150, 0, 280, 200, 200, 270); //green curve
  curve(200,200, 250, 0, 0, 280, 200, 270); //green curve
  curve(0,0, 50, 0, 0, 285, 250, 290); //green curve
  curve(40,40, 0, 150, 300, 80, 200, 200); //green curve
  curve(20,140, 150, 0, 0, 150, 150, 270); //green curve
  curve(10,150, 300, 0, 0, 80, 10, 200); //green curve
  curve(80,80, 300, 70, 0, 280, 100, 300); //green curve
  curve(50,80, 300, 10, 150, 200, 200, 170); //green curve
  curve(20,40, 70, 200, 150, 10, 50, 190); //green curve
  curve(20,40, 30, 0, 10, 80, 40, 80); //green curve
  curve(40,40, 300, 10, 240, 180, 10, 170); //green curve
  curve(10,50, 20, 200, 50, 0, 100, 170); //green curve
  curve(0,40, 180, 0, 0, 275, 150, 190); //green curve
  curve(40,60, 0, 30, 300, 60, 50, 80); //green curve
  curve(20,20, 0, 160, 300, 170, 80, 100); //green curve
}


void keyPressed(){
println("Lines not short, not straight, crossing and touching, drawn at random, using four colors, uniformly dispersed with maximum density, covering the entire surface of the wall.");
//print the Sol Lewitt Wall Drawing No. 65 instructions. 
}
  