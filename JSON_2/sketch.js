var sunriseImg; 
var eveningImg;  
var imgWidth;
var imgHeight;



function preload(){
  eveningImg = loadImage('images/evening.jpg');
  sunriseImg = loadImage("images/sunrise.jpg");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  imgWidth = windowWidth; 
  imgHeight = windowHeight; 


  // Load data from Open Weathermap
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=New%20York,NY&units=imperial&APPID=7bbbb47522848e8b9c26ba35c226c734';
  loadJSON(url, gotInformation);
}


function gotInformation(information) {
 
  //Determine the current time 
  var dateNow = new Date();
  
  //Determine sunrise and sunset
  var sunrise = information.sys.sunrise;
  var dateSunrise = new Date (sunrise*1000);
  var sunset = information.sys.sunset;
  var dateSunset = new Date (sunset*1000);

  //Change background according to sunrise and sunset time
  if (dateNow < dateSunrise || dateNow > dateSunset) {
    image(eveningImg, 0, 0, imgWidth, imgHeight);
  } else {
    image(sunriseImg, 0, 0, imgWidth, imgHeight);
  } 


  //Color text
  fill(255);
  textSize(30);

  //Label placement on page  
  var fifth = windowHeight/5;
  var textY = windowHeight - (fifth*4);

  //City
  text(information.name + ' Weather', 60, textY);
  
  //Fahrenheit
  text('Temperature Fahrenheit: ' + floor(information.main.temp)+'°',60, textY+40);
}