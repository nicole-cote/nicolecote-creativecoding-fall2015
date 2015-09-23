function setup() {
 createCanvas(600, 400);
}

function draw() {

if(keyCode===LEFT_ARROW){{

background(64,0,0);

fill(43, 0, 0);//dark red
rect(0,35,600,70);

fill(235, 0, 0);//lighter red
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

} else if (keyCode===UP_ARROW) {

background(0,0,64);

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

} else if (keyCode===RIGHT_ARROW) {

background(0,64,0);

fill(0, 43, 0);//dark green
rect(0,35,600,70);

fill(0, 235, 0);//lighter green
rect(25, 75, 530, 240);

noStroke();
fill(0, 180, 0);//light green
rect(25, 75, 530, 30);

noStroke();
fill(0, 45, 0);//dark green
rect(70, 315, 455, 400);

noStroke();
fill(0, 180, 0);//light green
rect(70, 130, 95, 185);

noStroke();
fill(0, 180, 0);//light green
rect(400, 130, 125, 185);

noStroke();
fill(0, 180, 0);//light green
rect(165, 265, 330, 50);

fill(0, 68, 0);//dark green
rect(120, 170, 23, 93);

fill(0, 68, 0);//dark green
rect(425, 170, 23, 93);

} else if (keyCode===DOWN_ARROW) {

background(0,64,0);//green

fill(0, 0, 43);//dark blue
rect(0,35,600,70);

fill(235);//off-white
rect(25, 75, 530, 240);

noStroke();
fill(0, 0, 45);//dark blue
rect(70, 315, 455, 400);

noStroke();
fill(0, 45, 0);//dark green
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

fill(0, 0, 68);//dark blue
rect(120, 170, 23, 93);

fill(0, 0, 68);//dark blue
rect(425, 170, 23, 93);
  
} else {

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
}