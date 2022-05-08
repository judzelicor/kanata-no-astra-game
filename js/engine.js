class Engine {
  constructor () {
    this.STAGE = document.getElementById('universe');
    this.STAGE_WIDTH = 1480;
    this.STAGE_HEIGHT = 600;
    this.STAGE_TILES = [];
    this.STAGE_TILE_DIMENSION = 20;
    this.STAGE_TILES_COUNT = (this.STAGE_WIDTH * this.STAGE_HEIGHT) / this.STAGE_TILE_DIMENSION ** 2;
    this.SPACESHIP = document.createElement('img')
    this.SPACESHIP_SPAWNPOINT = undefined;
    this.SPACESHIP_POSITION = 0;
    this.SPACESHIP_DIRECTION = -74;
  }
}

const engine = new Engine;