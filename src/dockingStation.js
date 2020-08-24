"use strict";

const defaultCapacity = 20;

class DockingStation {
  constructor(stationCapacity = defaultCapacity) {
    this.stationCapacity = stationCapacity;
    this.bikesStored = [];
  }

  bikes() {
    return this.bikesStored;
  }

  releaseBike() {
    if (this.empty()) {
      throw new Error("No bikes available");
    }
    let isBikeReleased = false;
    let bikeToBeReturned = null;

    this.bikesStored.some((bike, index) => {
      if (bike.bikeWorking()) {
        this.bikesStored.splice(index, 1); // remove 1 items at position index.
        isBikeReleased = true;
        bikeToBeReturned = bike;
        return bike;
      }
    });
    if (!isBikeReleased) {
      throw new Error("No working bikes currently available");
    }
    return bikeToBeReturned;
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
