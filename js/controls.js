function controlShip(event) {
    switch (event.keyCode) {
    case 37:
      engine.SPACESHIP_DIRECTION = -1;
      moveShip()
      break;
    case 38:
      engine.SPACESHIP_DIRECTION = -74;
      moveShip()
      break;
    case 39:
      engine.SPACESHIP_DIRECTION = 1;
      moveShip()
      break;
    case 40:
      engine.SPACESHIP_DIRECTION = 74;
      moveShip()
      break;
    case 87:
      summonArtificialWormhole();
      break;
  }

  collide();
}

function moveShip() {
  engine.SPACESHIP_POSITION += engine.SPACESHIP_DIRECTION;
  engine.STAGE_TILES[engine.SPACESHIP_POSITION].appendChild(engine.SPACESHIP);

  switch (engine.SPACESHIP_DIRECTION) {
    case 1:
      engine.SPACESHIP.className = "astra movingEast";
      break;
    case -1:
      engine.SPACESHIP.className = "astra movingWest";
      break;
    case -74:
      engine.SPACESHIP.className = "astra movingNorth";
      break;
    case 74:
      engine.SPACESHIP.className = "astra movingSouth";
      break;
  }
}

// document.addEventListener('keyup', controlShip);