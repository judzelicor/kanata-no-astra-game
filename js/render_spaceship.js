function renderSpaceship() {
  console.log(engine.STAGE_TILES)
  const randomNumber = Math.floor(Math.random() * engine.STAGE_TILES_COUNT);
  engine.SPACESHIP_SPAWNPOINT = engine.STAGE_TILES[randomNumber];
  engine.SPACESHIP_POSITION = randomNumber;
  engine.SPACESHIP.src = './assets/spaceship.svg';
  engine.SPACESHIP.className = "astra"
  engine.SPACESHIP_SPAWNPOINT.appendChild(engine.SPACESHIP)
}