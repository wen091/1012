function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255);//設定框線顏色
  noFill();//不要充滿顏色
  rectMode(CENTER)//變成以方框中心點為座標點

  //ellipse(25,25,50);//在座標(25,25)產生半徑50的圓
  //rect(25,25,25)//方框座標點為(25,25)
  //ellipse(50,50,20)//在座標(50,50)畫一個半徑25的圓
  //ellipse(0,50,20)//在座標(50,50)畫一個半徑25的圓
 

  for (var j= 0; j <(height/200); j++) //j++ ==> j=j+1
  {
    for (var i= 0; i < (width/200); i++) //i++ ==> i=i+1
  { 
    ellipse(100+(i*200),100+(j*200),200+mouseX/10);
    stroke("#fefae0")
    rect(100+(i*200),100+(j*200),100);
    stroke("#83c5be")
    ellipse(200+(i*200),200+(j*200),100+mouseY/5);
    stroke("#bde0fe")
    ellipse(0+(i*200),200+(j*200),100+mouseY/5);
    stroke("#c7f9cc")
  }
  }
}