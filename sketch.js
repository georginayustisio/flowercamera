// clmtrackr + p5 basic exmaple. Face Tracking example created by Kyle McDonald revised by Xin Xin, 2020
// https://kylemcdonald.github.io/cv-examples/

//Taken from: https://advanced-critical-computation-23.glitch.me/p2.html

let capture;
let tracker;
let positions;

let c;

let select;

// preloads
let amazing;
let white;
let yellow;


// uploading fonts
function preload(){
  amazing = loadFont("Fonts/amazing.ttf");
  //white = loadImage("Image/white.PNG");
  //yellow = loadImage("Image/yellow.PNG");
}

function setup() {
    // load p5 functions:
    c = createCanvas(windowWidth, windowHeight);
  
    capture = createCapture(VIDEO);

    capture.size(width, height);
    capture.position(0,0);
    capture.hide();
    
    // calling buttons
    buttonPic = createButton('📸');
    buttonPic.mousePressed(takePic);
    buttonPic.position(50,300);
    buttonPic.style('font-size','24px');
    buttonPic.style('padding', '8px 12px'); 
    buttonPic.style('border-radius', '50%');
    buttonPic.style('background-color','#E4D8B4');


  // creating a dropdown menu and position it next to the video
   select = createSelect();
   select.option("White");
   select.option("Yellow");
   select.option('Orange');
   select.option("Purple");
   select.option("Pink");
   select.selected("White");
   select.changed(mySelectEvent);
   select.position(45,400);
   select.style('font-size','12px');
    select.style('padding', '8px 3px'); 
    select.style('border-radius', '10%');
    select.style('background-color','#E4D8B4');
   let flowerType = select.value();

  if (flowerType == 'White'){
    createFlower = loadImage("Image/white.PNG");
  }
  if (flowerType == 'Yellow'){
    createFlower = loadImage("Image/yellow.PNG");
  }
  if (flowerType == 'Orange'){
    createFlower = loadImage("Image/orange.PNG");
  } 
  if (flowerType == 'Purple'){
    createFlower = loadImage("Image/purple.png");
  } 
  if (flowerType == 'Pink'){
    createFlower = loadImage("Image/pink.png");
  } 
  
  // load clmtrackr functions:
    tracker = new clm.tracker(); // create a new clmtrackr object
    tracker.init(); // initialize the object
    tracker.start(capture.elt); // start tracking the video element capture.elt
}

function draw() {

    translate(width,0);
    scale(-1,1);
    image(capture, 0, 0, width, height);
   
    let positions = tracker.getCurrentPosition(); // updates the tracker with current positions
//  console.log(positions); // uncomment to see the list of arrays
  
// image
//image(white,0,0);
//image(yellow,10,0);

// text
//textFont(amazing);
push();
translate(width,0);
scale(-1,1);
textFont(amazing);
textSize(100);
fill(255);
text("You look amazing!",250,150);
pop();

/// draw face outline
if (positions){
  noFill();
  stroke(255,0);
}
  
  for (let i = 0; i < positions.length; i++) {
  ellipse(positions[i][0], positions[i][1], 4, 4);
//   text(i, positions[i][0], positions[i][1]);
}


if (positions.length > 0) {
    //fill(255, 0, 0);
    image(createFlower, positions[19][0] - 25, positions[19][1] - 35, 150, 150);
  }

if (positions.length > 0) {
    fill(255,0,0);
    image(createFlower, positions[15][0] - 125, positions[15][1] - 35, 150, 150);
}  
}


// selection 
function mySelectEvent(){
  let flowerType = select.value();

  if (flowerType == 'White'){
   createFlower = loadImage("Image/white.PNG");
 }
 if (flowerType == 'Yellow'){
   createFlower = loadImage("Image/yellow.PNG");
 }
 if (flowerType == 'Orange'){
  createFlower = loadImage("Image/orange.PNG");
} 
if (flowerType == 'Purple'){
  createFlower = loadImage("Image/purple.png");
} 
if (flowerType == 'Pink'){
  createFlower = loadImage("Image/pink.png");
} 
}

// creating buttons
function createButton(){
  button = createButton('Click to take a pic!');
  button.mousePressed(takePic);
}

// taking pictures
function takePic(){
  print('You took a Picture!');
  saveCanvas(c, 'myCanvas', 'jpg');
}




