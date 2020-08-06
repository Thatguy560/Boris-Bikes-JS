"use strict";

const defaultCapacity = 20;

class Dockingstation {
  constructor(stationCapacity = defaultCapacity) {
    this.stationCapacity = stationCapacity;
    this.bikesStored = [];
  }

  releaseBike() {
    this.bikesStored.shift();
  }

  dock(bike) {
    if (this.full()) {
      throw new Error("Can't dock bike, station is at max capacity.");
    }
    this.bikesStored.push(bike);
  }

  bikesAvailable() {
    return this.bikesStored.length;
  }

  // I want to see a bike that has been docked (Not done yet)
  viewAvailableBikes() {
    this.bikesStored.forEach((i) => {
      console.log(i);
    });
  }
  empty() {
    this.bikesStored.length === 0;
  }
  full() {
    this.bikesAvailable() === defaultCapacity;
  }
}

// I'd like docking stations not to release bikes when there are none available
// I'd like docking stations not to accept more bikes than their capacity. (Done ✓)
