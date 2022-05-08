function collide() {
  if (engine.SPACESHIP_POSITION === wormhole.WORMHOLE_POSITION) {
    newShipPosition = planet.PLANET_POSITION + engine.SPACESHIP_DIRECTION;
    warpShip(newShipPosition)
  }

  if (engine.SPACESHIP_POSITION === planet.PLANET_POSITION) {
    regainFuel()
    planetAndShipCollide()
  }
}

function warpShip(newShipPosition) {
  engine.SPACESHIP.classList.add('warping');
  document.removeEventListener('keyup', controlShip);
  engine.SPACESHIP.addEventListener('animationend', function () {
    engine.SPACESHIP.remove();
    engine.SPACESHIP_POSITION = newShipPosition;
    engine.STAGE_TILES[newShipPosition].append(engine.SPACESHIP);
    engine.SPACESHIP.classList.remove('warping');
    document.addEventListener('keyup', controlShip);
    wormhole.WORMHOLE.classList.add('dissipating')
    wormhole.WORMHOLE.addEventListener('animationend', function () {
      wormhole.WORMHOLE.remove();
      wormhole.WORMHOLE_POSITION = undefined;
    })
  })
} 

function planetAndShipCollide() {
  planet.PLANET.remove();
  renderPlanet();
}