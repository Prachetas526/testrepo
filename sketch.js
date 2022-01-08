function preload() {
  song = loadSound("song1.mp3")
  bg = loadImage("img.jpg")
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  s1 = createSlider(0,1,0,0.01)
  b1 = createButton("Play Song")
  b2 = createButton("Stop Song")
  s1.position(10,10)
  b1.position(50,50)
  b2.position(100,100)
  b1.mousePressed(playsong)
  b2.mousePressed(stopsong)
  
}

function draw() {
  background(bg);
  song.setVolume(s1.value())
}

function playsong() {
  song.play()
  }
function stopsong() {
  song.stop()
  }