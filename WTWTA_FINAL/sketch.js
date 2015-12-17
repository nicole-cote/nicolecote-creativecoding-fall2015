var pages = [];
var currentTime;

var coverpage; 
var insidecoverpage;
var titlepage;
var page1;
var page2;
var page3;
var page4;
var page5;
var page6;
var page7;
var page8;
var page9;
var page10;
var page11;
var page12;
var page13;
var page14;
var page15;
var page16;
var page17;
var page18;

function preload(){

coverpage = new Page(loadImage("images/1.1_WTWA_bookcover.jpg"), 
[],
0,
5000,
1000,
null,
null
);

insidecoverpage = new Page(loadImage("images/2_WTWTA_InsideCover.jpg"), 
[],
5000,
10000,
6000,
null,
null
);

titlepage = new Page(loadImage("images/3_WTWTA_TitlePage.jpg"), 
[],
10000,
15000,
11000,
null,
null
);

page1 = new Page(loadImage("images/4_WTWTA_Pg2.jpg"), 
[
"The night Max wore his wolf suit and made",
"mischief of one kind",  
  ],
15000,
22000,
16000,
null,
null
);

page2 = new Page(loadImage("images/5_WTWTA_Pg3.jpg"), 
["and another"],
22000,
29000,
23000,
null,
null
);

page3 = new Page(loadImage("images/6_WTWTA_Pg4.jpg"), 
["his mother called him 'WILD THING!'",
'',
"and Max said 'I’LL EAT YOU UP!'",
'',
"so he was sent to bed without eating anything.", 
'', 
'', 
'',
'',
'',
'',
''
],
29000,
39000,
30000,
null,
null
);

page4 = new Page(loadImage("images/7_WTWTA_Pg5.jpg"), 
["That very night in Max’s room a forest grew"],
39000,
49000,
40000,
null,
loadImage("images/tree.png")
);

page5 = new Page(loadImage("images/8_WTWTA_Pg6.jpg"), 
["and grew-"],
49000,
59000,
50000,
null,
loadImage("images/tree.png")
);

page6 = new Page(loadImage("images/9_WTWTA_Pg7.jpg"), 
["and grew until his ceiling hung with vines", 
'',
"and the walls became the world all around"
],
59000,
69000,
60000,
null,
loadImage("images/tree.png")
);

page7 = new Page(loadImage("images/10_WTWTA_Pg8.jpg"), 
["and an ocean tumbled by with a private boat", 
"for Max", 
"and he sailed off through night and day"
],
69000,
79000,
70000,
loadSound("sounds/Sailing_edited.m4a"),
null 
);
 
page8 = new Page(loadImage("images/11_WTWTA_Pg9.jpg"), 
["and in and out of weeks", 
'',
"and almost over a year",
'',
"to where the wild things are."
],
79000,
89000,
80000,
loadSound("sounds/Sailing_edited.m4a"),
null 
); 
 
page9 = new Page(loadImage("images/12_WTWTA_Pg10.jpg"), 
["And when he came to the place where the wild", 
"things are", 
"they roared their terrible roars and gnashed their", 
"terrible teeth", 
"and rolled their terrible eyes and showed their", 
"terrible claws"
],
89000,
99000,
90000,
null,
null 
); 
 
page10 = new Page(loadImage("images/13_WTWTA_Pg11.jpg"), 
["till Max said 'BE STILL!'", 
'',
"and tamed them with the magic trick", 
'',
"of staring into all of their yellow eyes without", 
"blinking once", 
"and they were frightened and called him the most", 
"wild thing of all"
],
99000,
109000,
100000,
loadSound("sounds/BeStill_edited.m4a"), 
null 
); 
 
page11 = new Page(loadImage("images/14_WTWTA_Pg12.jpg"), 
["and made him king of the wild things.", 
'',
"'And now' cried Max, 'let the wild rumpus start!'"
],
109000,
119000,
110000,
null,
null 
); 
 
page12 = new Page(loadImage("images/15_WTWTA_Pg13.jpg"), 
[],
119000,
129000,
120000,
loadSound("sounds/Rumpus_edited.m4a"),
null 
); 
 
page13 = new Page(loadImage("images/16_WTWTA_Pg14.jpg"), 
[],
129000,
139000,
130000,
loadSound("sounds/Rumpus_edited.m4a"),
null 
); 
 
page14 = new Page(loadImage("images/17_WTWTA_Pg15.jpg"), 
[],
139000,
149000,
140000,
loadSound("sounds/Rumpus_edited.m4a"), 
null 
); 

page15 = new Page(loadImage("images/18_WTWTA_Pg16.jpg"), 
["'Now stop!' Max said and sent the wild things off", 
"to bed", 
"without their supper. And Max the king of all the", 
"wild things was lonely", 
"and wanted to be where someone loved him best", 
"of all.", 
"Then all around from far away across the world,", 
'',
"he smelled good things to eat", 
'',
"so he gave up being king of where the wild things", 
"are."], 
149000,
159000,
150000,
null, 
null 
);

page16 = new Page(loadImage("images/19_WTWTA_Pg17.jpg"), 
["But the wild things cried, 'Oh please don’t go—", 
'',
"we’ll eat you up-we love you so!'", 
'',
"And Max said, 'No!'", 
'',
"The wild things roared their terrible roars and", 
"gnashed their terrible teeth", 
"and rolled their terrible eyes and showed their", 
"terrible claws", 
"but Max stepped into his private boat and waved", 
"good-bye"], 
159000,
169000,
160000,
null, 
null 
);

page17 = new Page(loadImage("images/20_WTWTA_Pg18.jpg"), 
["and sailed back over a year", 
'',
"and in and out of weeks", 
'',
"and through a day"],
169000,
179000,
170000,
loadSound("sounds/HeadsUp(oohoohooh)_edited.m4a"), 
null 
);

page18 = new Page(loadImage("images/21_WTWTA_Pg19.jpg"), 
["and into the night of his very own room", 
'',
"where he found his supper waiting for him", 
'',
"and it was still hot."],
179000,
189000,
180000,
loadSound("sounds/HeadsUp(oohoohooh)_edited.m4a"), 
null 
);


  pages = [
    coverpage, 
    insidecoverpage,
    titlepage,
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
    page10,
    page11,
    page12,
    page13,
    page14,
    page15,
    page16,
    page17,
    page18
  ];
  
} //END PRELOAD

function setup(){
  //page layout
  currentTime = millis();
  createCanvas (windowWidth, windowHeight);
  background(255);
  
  //font information
  textFont("Arial Bold");
  textSize(22);
  fill(0); 
  
  //timing of sound
  setTimeout(function(){
    pages[9].sound.play();
    }, 69000);
    
  setTimeout(function(){
    pages[12].sound.play();
    }, 99000);
  
  setTimeout(function(){
    pages[14].sound.play();
    }, 119000);
  
  setTimeout(function(){
    pages[19].sound.play();
    }, 169000);  

  }//END SETUP

function draw(){

for(var i = 0; i < pages.length; i++){

  if (millis() >= pages[i].startTime){
    clear();
    image(pages[i].backgroundImage, 0, 0, pages[i].backgroundImage.width,
    pages[i].backgroundImage.height, 0,0, width/2, height);
      
      if (pages[i] == coverpage || pages[i] == insidecoverpage || pages[i] == titlepage || 
          pages[i] == page12 || pages[i] == page13 || pages[i] == page14) {
            image(pages[i].backgroundImage, 0, 0, pages[i].backgroundImage.width,
            pages[i].backgroundImage.height, 0,0, width, height);
          }
    
    text(pages[i].text1, width * (3/5), (height * 1)/(7));
    text(pages[i].text2, width * (3/5), (height * 1.25)/(7));
    text(pages[i].text3, width * (3/5), (height * 2)/(7));
    text(pages[i].text4, width * (3/5), (height * 2.25)/(7));
    text(pages[i].text5, width * (3/5), (height * 3)/(7));
    text(pages[i].text6, width * (3/5), (height * 3.25)/(7));
    text(pages[i].text7, width * (3/5), (height * 4)/(7));
    text(pages[i].text8, width * (3/5), (height * 4.25)/(7));
    text(pages[i].text9, width * (3/5), (height * 5)/(7));
    text(pages[i].text10, width * (3/5), (height * 5.25)/(7));
    text(pages[i].text11, width * (3/5), (height * 6)/(7));
    text(pages[i].text12, width * (3/5), (height * 6.25)/(7));
    
  } 
}
}//END DRAW

//END CODE
