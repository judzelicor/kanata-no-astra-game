class Game {
  constructor () {
    this.GAME_OVER_SCREEN = document.querySelector('.game-over-screen');
    this.BG_MUSIC = document.getElementsByTagName('audio');
  }

  start() {
    document.addEventListener('keyup', controlShip);
    renderStage();
    renderSpaceship();
    renderPlanet();
    displayScore();
    addScore();
  }

  displayGameOverScreen() {
    this.GAME_OVER_SCREEN.style.display = "flex"
  }

  restart() {
    this.GAME_OVER_SCREEN.style.display = "none";
    wormhole.WORMHOLE_SUMMON_TIMES = 2;
    renderStage();
    renderSpaceship();
    renderPlanet();
    fuelRestart();
    regainFuel();
    consumeFuel();
    resetScore();
  }
}

const game = new Game,
      restartButton = document.querySelector('.restart');

restartButton.addEventListener('click', function () {
  game.restart();
})

game.start();