"use strict";

class Dockingstation {
  // stationcapacity = 20
  constructor() {
    // this.stationcapacity = stationcapacity;
    this.bikesstored = [];
  }

  dock(bike) {
    this.bikesstored.push(bike);
  }

  bikesAvailable() {
    return this.bikesstored.length;
  }
}
