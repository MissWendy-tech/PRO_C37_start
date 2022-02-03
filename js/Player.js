class Player {
  constructor() {
    this.name = null;//guarda el nombre del jugador
    this.index = null;//para dar una identificacion unica a cada jugador
    this.positionX = 0;//para almacenar la posicion
    this.positionY = 0;
  }
//Agregamos todas las propiedades de los jugadores
  addPlayer() {
    //crea la jerarquia de jugadores
    
//Para dar la posicion x a ambos jugadores un a la izquierda y otro derecha
    
//Actualizando terreno en la BD
    
  }
//getCount y updateCount actualizan el campo playerCount en BD
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }
//Obtener la informacion de los jugadores
  
}
