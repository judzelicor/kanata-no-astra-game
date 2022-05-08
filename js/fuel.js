class Fuel {
  constructor () {
    this.FUEL_GAUGE = document.querySelector('.fuel-indicator');
    this.FUEL_CAPACITY = this.FUEL_GAUGE.clientWidth;
    this.REMAINING_FUEL = this.FUEL_CAPACITY;
    this.FUEL_CONSUMPTION_RATE = -4;
  }
}

const fuel = new Fuel;

function consumeFuel() {

  if (fuel.REMAINING_FUEL > 0) {
    fuel.REMAINING_FUEL = fuel.REMAINING_FUEL + fuel.FUEL_CONSUMPTION_RATE;
    fuel.FUEL_GAUGE.style.width = `${fuel.REMAINING_FUEL}px`
  } else {
    game.displayGameOverScreen();
    clearInterval(consumeID)
    fuel.FUEL_GAUGE.style.width = `${200}px`
  }
}

function regainFuel() {
  clearInterval(consumeID)
  fuel.FUEL_GAUGE.style.width = `${fuel.FUEL_CAPACITY}px`
  fuel.REMAINING_FUEL = fuel.FUEL_CAPACITY
  consumeID =  setInterval(consumeFuel, 250);
}

function fuelRestart() {
  fuel.FUEL_CAPACITY = fuel.FUEL_GAUGE.clientWidth;
  consumeID =  setInterval(consumeFuel, 250);
}

let consumeID =  setInterval(consumeFuel, 250);