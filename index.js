let img;

function preload() {
  img = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREZuvH9Yu5fE_LghsniPcELJZHhlUickcwni03qcxOXp6GbBvH');
}


function setup() {
    createCanvas(window.innerWidth, window.innerHeight,WEBGL);
  }
  
  function draw() {
    background(0);
    rotateY(millis() / 10000);
    noStroke();
    ambientLight(1000);
    texture(img);
    sphere(200,24,24);
  }
  