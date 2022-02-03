class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
//cambiamos es estado del juego / BD raiz y update cambio de valor en el estado
  

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    //creamos nuestros sprites
   
  }
//Oculta Form
  

  //estado de play


      //undefined al inicio porque solo tendra valores recibidos

}
