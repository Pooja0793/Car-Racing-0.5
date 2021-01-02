var canvas,backgroundImage;
var gameState = 0,playerCount;
var database;
var form,player,game;


function setup(){
  database = firebase.database();
  console.log(database);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  
}

