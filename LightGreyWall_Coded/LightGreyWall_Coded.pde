/*Rendition of "Light Grey Wall" (1958)  by Josef Albers. 
Image based on Google CUltural Institute image.Tips from 
Processing.org Resource Page*/

void setup() {
  size(600,400);
 
}
 
void draw() {
background(64);//dark grey background

fill(43);//dark grey
rect(0,35,600,70);

fill(235);//off-white
rect(25, 75, 530, 240);

noStroke();
fill(180);//light grey
rect(25, 75, 530, 30);

noStroke();
fill(45);//dark grey
rect(70, 315, 455, 400);

noStroke();
fill(180);//light grey
rect(70, 130, 95, 185);

noStroke();
fill(180);//light grey
rect(400, 130, 125, 185);

noStroke();
fill(180);//light grey
rect(165, 265, 330, 50);

fill(68);//dark grey
rect(120, 170, 23, 93);

fill(68);//dark grey
rect(425, 170, 23, 93);

}