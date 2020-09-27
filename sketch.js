var poke;

function setup() {
  createCanvas(400, 400);
  poke = new Pikachu();
  frameRate(10);
}

function draw() {
  background(220);
  poke.mostrar();
  if (keyIsPressed && keyCode == 39){
    poke.moverDer();
  }
}