class Wormhole {
  constructor () {
    this.WORMHOLE = document.createElement('img');
    this.WORMHOLE_SPAWNPOINTS = [];
    this.WORMHOLE_SPAWNPOINT = 0;
  }
}

const wormhole = new Wormhole;

function summonArtificialWormhole() {
  wormhole.WORMHOLE.src = './assets/wormhole.png';
  wormhole.WORMHOLE.className = "wormhole";
  engine.STAGE_TILES[100].append(wormhole.WORMHOLE);
}

function generateWormholeSpawnpoints() {

}

summonArtificialWormhole();