var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  //Precargamos las imagenes 

}
//Llamamos a la funcion para leer el estado del juego
//Primero llamamos a getState() y luego a start() que a su vez
//crea un objeto para la clase Form y Player
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  //Ver actualizacion de State y playerCount y llamar a PLAY
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
