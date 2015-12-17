function Page(img, texts, slideInTime, slideOutTime, startTime, sound, img2) {
  this.backgroundImage = img;
  //if texts[index] does not exist then set property to ''
  this.text1 = texts[0] || '';
  this.text2 = texts[1] || '';
  this.text3 = texts[2] || '';
  this.text4 = texts[3] || '';
  this.text5 = texts[4] || '';
  this.text6 = texts[5] || '';
  this.text7 = texts[6] || '';
  this.text8 = texts[7] || '';
  this.text9 = texts[8] || '';
  this.text10 = texts[9] || '';
  this.text11 = texts[10] || '';
  this.text12 = texts[11] || '';
  this.slideIn = slideInTime;
  this.slideOut = slideOutTime;
  this.startTime = startTime;
  this.sound = sound;
  this.interactiveImage = img2;
}
