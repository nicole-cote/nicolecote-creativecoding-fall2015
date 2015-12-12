var branchLength = -200;
var theta;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    theta = map(mouseX,0,width,0,PI/3);

    
//trunk of tree

  translate(width/2, height-100);
  stroke(5, 44,14);
  strokeWeight(10);
  line(0, 0, 0, branchLength);

//convert branch length & start the branches  
  branch(branchLength * -1);
  
} 
 
function branch(len) {
  
  //noStroke();
  strokeWeight(2);
      
  line(0, 0, 0, -len);
  translate(0, -len);
  stroke(4, 64, 17);

  len *= 0.66;
  
  if (len > 2) {
    push();    
    rotate(theta);   
    branch(len);      
    pop();     

    // Repeat to the left 
    push();
    rotate(-theta);
    branch(len);
    pop();
  }
}


