/*Rendition of "Light Grey Wall" (1958)  by Josef Albers. 
Image based on Google CUltural Institute image.Tips from 
Processing.org Resource Page*/

void setup() {
  size(600,400);
 
}
 
void draw() {
background(64, 0, 0);//dark red background

fill(43, 0, 0);//dark red
rect(0,35,600,70);

fill(235, 0, 0);//off-white
rect(25, 75, 530, 240);

noStroke();
fill(180, 0, 0);//light red
rect(25, 75, 530, 30);

noStroke();
fill(45, 0, 0);//dark red
rect(70, 315, 455, 400);

noStroke();
fill(180, 0, 0);//light red
rect(70, 130, 95, 185);

noStroke();
fill(180, 0, 0);//light red
rect(400, 130, 125, 185);

noStroke();
fill(180, 0, 0);//light red
rect(165, 265, 330, 50);

fill(68, 0, 0);//dark red
rect(120, 170, 23, 93);

fill(68, 0, 0);//dark red
rect(425, 170, 23, 93);

}