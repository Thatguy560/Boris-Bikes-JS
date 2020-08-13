"use strict";

// const stationCapacity = 20;

class DockingStation {
  constructor(stationCapacity = 20) {
    // this.stationCapacity = stationCapacity;
    this.bikesStored = [];
    this.stationCapacity = stationCapacity;
  }

  releaseBike() {
    if (this.empty()) {
      throw new Error("No bikes available");
    }
    this.bikesStored.shift();
    return this.bikesStored;
  }

  dock(bike) {
    if (this.full()) {
      throw new Error("Can't dock bike, station is at max capacity.");
    }
    this.bikesStored.push(bike);
    return this.bikesStored;
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
    return this.bikesStored.length === 0;
  }

  full() {
    return this.bikesAvailable() === this.stationCapacity;
  }
}
