var vid;

function setup() {
  createCanvas(windowWidth,windowHeight);
 
 //camera capture 
  vid = createCapture(VIDEO);
  vid.hide();
}

function draw() {
  background(255);
  

//camera pixels
image(vid, windowWidth/2, 0);
  filter('THRESHOLD', .4);
  vid.loadPixels();
  for(var y=0; y<vid.height; y+=5){
    for(var x=0; x<vid.width; x+=5){
      var i = y * width + x;
      var darkness = 255 - vid.pixels[i*4];
      fill(darkness);
      ellipse(x, y, 10, 10);
    }
  }
  
}
