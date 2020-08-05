"use strict";

class Dockingstation {
  // const defaultCapacity = 20;
  constructor(stationcapacity = 20) {
    this.stationcapacity = stationcapacity;
    this.bikesstored = [];
  }

  releaseBike() {
    this.bikesstored.shift();
  }

  dock(bike) {
    this.bikesstored.push(bike);
  }

  bikesAvailable() {
    return this.bikesstored.length;
  }

  // I want to see a bike that has been docked
  viewAvailableBikes() {
    this.bikesstored.forEach((i) => {
      console.log(i);
    });
  }
}
