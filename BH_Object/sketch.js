var imgBackground; 
var dickens = true;

var BH1;
var BH2;
var BH3;
var BH4;
var BH5;
var BH6;
var BH7;
var BH8;
var BH9;
var BH10;
var BH11;
var BH12;
var BH13;
var BH14;
var BH15;
var BH16;
var BH17;
var BH18;
var BH19;
var BH20;
var BH21;
var BH22;
var BH23;
var BH24;
var BH25;
var BH26;
var BH27;
var BH28;
var BH29;
var BH30;

function preload() {

  BH1 = new Sentence("London. Michaelmas term lately over.... Implacable November weather. Mud in the streets....", 
  5, 
  5);
  
  BH2 = new Sentence("Smoke lowering down from chimney-pots, making a soft black drizzle, with flakes of soot....",
  5,
  25);
  
  BH3 = new Sentence("Dogs, undistinguishable in mire. Horses, scarcely better; splashed to their very blinkers....",
  5,
  45);
  
  BH4 = new Sentence("Foot passengers, jostling one another's umbrellas in a general infection of ill temper....",
  5,
  65);

  BH5 = new Sentence("Foot passengers have been slipping and sliding since the day broke (if this day ever broke)....",
  5,
  85);

  BH6 = new Sentence("Adding new deposits to the crust upon crust of mud...",
  5,
  105);

  BH7 = new Sentence("Sticking at those points tenaciously to the pavement, and accumulating at compound interest.",
  5,
  125);

  BH8 = new Sentence("Fog everywhere.",
  5,
  145);

  BH9 = new Sentence("Fog up the river, where it flows among green aits and meadows;",
  5,
  165);
  
  BH10 = new Sentence("Fog down the river, where it rolls defiled among the tiers of shipping and the waterside pollutions of a great (and dirty) city.",
  5,
  185);

  BH11 = new Sentence("Fog on the Essex marshes.",
  5,
  205);
  
  BH12 = new Sentence("Fog on the Kentish heights.",
  5,
  225);

  BH13 = new Sentence("Fog creeping into the cabooses of collier-brigs.",
  5,
  245);
  
  BH14 = new Sentence("Fog lying out on the yards and hovering in the rigging of great ships.",
  5,
  265);
  
  BH15 = new Sentence("Fog drooping on the gunwales of barges and small boats.",
  5,
  285);
  
  BH16 = new Sentence("Fog in the eyes and throats of ancient Greenwich pensioners, wheezing by the firesides of their wards....",
  5,
  305);
  
  BH17 = new Sentence("Fog in the stem and bowl of the afternoon pipe of the wrathful skipper, down in his close cabin...",
  5,
  325);
  
  BH18 = new Sentence("Fog cruelly pinching the toes and fingers of his shivering little 'prentice boy on deck.",
  5,
  345);

  BH19 = new Sentence("Chance people on the bridges peeping over the parapets into a nether sky of fog,",
  5,
  365);
  
  BH20 = new Sentence("With fog all round them, as if they were up in a balloon and hanging in the misty clouds.",
  5,
  385);
  
  BH21 = new Sentence("Gas looming through the fog in divers places in the streets, much as the sun may, from the spongey fields,",
  5,
  405);
  
  BH22 = new Sentence("Be seen to loom by husbandman and ploughboy. Most of thee shops lightes two hours before their time--",
  5,
  425);
  
  BH23 = new Sentence("As the gas seems to know, for it has a haggard and unwilling look.",
  5,
  445);
  
  BH24 = new Sentence("The raw afternoon is rawest, and the dense fog is densest, and the muddy streets are muddiest",
  5,
  465);
  
  BH25 = new Sentence("Near that leaden-deaded old obstruction, appropriate ornament for the thresholdof a leaden-headed old corporation,",
  5,
  485);
  
  BH26 = new Sentence("Temple Bar. And hard by Temple Bar, in Lincoln's Inn Hall, at the very heart of the fog,",
  5,
  505);
  
  BH27 = new Sentence("Sits the Lord High Chancellor in his High Court of Chancery.",
  5,
  525);
  
  BH28 = new Sentence("Never can there come fog too thick, never can there come mud and mire too deep,",
  5,
  545);
  
  BH29 = new Sentence("To assort with the groping and floundering condition which this High Court of Chancery,",
  5,
  565);
  
  BH30 = new Sentence("Most pestilent of hoary sinners, holds this day in the sight of heaven and earth.",
  5,
  585);

sentences = [
  BH1,
  BH2,
  BH3,
  BH4,
  BH5,
  BH6,
  BH7,
  BH8,
  BH9,
  BH10,
  BH11,
  BH12,
  BH13,
  BH14,
  BH15,
  BH16,
  BH17, 
  BH18,
  BH19,
  BH20,
  BH21,
  BH22,
  BH23,
  BH24,
  BH25,
  BH26,
  BH27,
  BH28,
  BH29,
  BH30,
  ];  

  imgBackground = loadImage('image/fog.jpg');
}


function setup() {
createCanvas(windowWidth, windowHeight);
background(255);
image(imgBackground, 0, 0, imgBackground.width, imgBackground.height, 0, 0, width, height);
  
//text details
textFont("Helvetica");
textSize(14);
fill(211);
}

function draw() {

  for(var i =0; i < sentences.length; i++){
  
  if (dickens == true) { 
    text(sentences[i].text1, sentences[i].positionX, sentences[i].positionY); 
  }
  
}

console.log(BH30.text1);
}
