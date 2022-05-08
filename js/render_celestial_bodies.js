class CelestialBody {
  constructor () {
    this.SPAWNPOINTS = [];
  }
}

class Planet {
  constructor () {
    this.PLANET = document.createElement('img');
    this.PLANET_SPAWNPOINT = 0;
    this.PLANET_POSITION = this.PLANET_SPAWNPOINT;
  }
}

class Wormhole {
  constructor () {
    this.WORMHOLE = document.createElement('img');
    this.WORMHOLE_SPAWNPOINT = 0;
    this.WORMHOLE_POSITION = this.WORMHOLE_SPAWNPOINT;
    this.WORMHOLE_SUMMONED = false;
    this.WORMHOLE_WARPPOINTS = [];
    this.WORMHOLE_SUMMON_TIMES = 2;
  }
}

const planet = new Planet,
      celestialBody = new CelestialBody,
      wormhole = new Wormhole;

function renderPlanet() {

  // generate celestial body spawnpoints
  generateCelestialBodySpawnpoints();

  // generate planet spawnpoint
  planet.PLANET_POSITION = generatePlanetSpawnpoint();

  planet.PLANET.classList.add('planet');
  planet.PLANET.src = `./assets/planets/planet-${Math.floor(Math.random() * 12) + 1}.png`;

  // render planet onto DOM
  engine.STAGE_TILES[planet.PLANET_POSITION].appendChild(planet.PLANET)
}

function generateCelestialBodySpawnpoints() {
  for (point = 74; point < engine.STAGE_TILES_COUNT; point++) {
    if (
      (point % 74 !== 0) &&
      (point <= 1848) &&
      ((point + 2) % 74 !== 0 && ((point + 1) % 74 !== 0))
      ) {
        celestialBody.SPAWNPOINTS.push(point)
    }
  }
}

function generatePlanetSpawnpoint() {
  // generate random number
  planet.PLANET_SPAWNPOINT = celestialBody.SPAWNPOINTS[Math.floor(Math.random() * celestialBody.SPAWNPOINTS.length)];

  // check if planet spawnpoint is not the same as the spaceship spawnpoint
  if (planet.PLANET_SPAWNPOINT !== engine.SPACESHIP_POSITION) {
    return planet.PLANET_SPAWNPOINT
  } else {
    generatePlanetSpawnpoint();
  }
}

function summonArtificialWormhole() {

  if (wormhole.WORMHOLE_SUMMON_TIMES > 0) {
    wormhole.WORMHOLE_POSITION = engine.SPACESHIP_POSITION + (engine.SPACESHIP_DIRECTION * 3);

    if (wormhole.WORMHOLE_POSITION < 0) {
      console.log('cannot summon wormhole at the event horizon');
      return
    }
    wormhole.WORMHOLE.src = './assets/wormhole.png';
    switch (engine.SPACESHIP_DIRECTION) {
      case 1:
        wormhole.WORMHOLE.className = "wormhole summonedEast";
        break;
      case -1:
        wormhole.WORMHOLE.className = "wormhole summonedWest";
        break;
      case -74:
        wormhole.WORMHOLE.className = "wormhole summonedNorth";
        break;
      case 74:
        wormhole.WORMHOLE.className = "wormhole summonedSouth";
        break;
    }

    engine.STAGE_TILES[wormhole.WORMHOLE_POSITION].append(wormhole.WORMHOLE);
    wormhole.WORMHOLE_SUMMON_TIMES--;
  }
}

function calculateWarpPoints() {
  
}