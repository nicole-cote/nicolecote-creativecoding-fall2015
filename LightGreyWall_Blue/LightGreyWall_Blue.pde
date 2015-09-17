/*Rendition of "Light Grey Wall" (1958)  by Josef Albers. 
Image based on Google CUltural Institute image.Tips from 
Processing.org Resource Page*/

void setup() {
  size(600,400);
 
}
 
void draw() {
background(0, 0, 64);//dark blue background

fill(0, 0, 43);//dark blue
rect(0,35,600,70);

fill(0, 0, 235);//off-white
rect(25, 75, 530, 240);

noStroke();
fill(0, 0, 180);//light blue
rect(25, 75, 530, 30);

noStroke();
fill(0, 0, 45);//dark blue
rect(70, 315, 455, 400);

noStroke();
fill(0, 0, 180);//light blue
rect(70, 130, 95, 185);

noStroke();
fill(0, 0, 180);//light blue
rect(400, 130, 125, 185);

noStroke();
fill(0, 0, 180);//light blue
rect(165, 265, 330, 50);

fill(0, 0, 68);//dark blue
rect(120, 170, 23, 93);

fill(0, 0, 68);//dark blue
rect(425, 170, 23, 93);

}