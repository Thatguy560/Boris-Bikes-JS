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
    // @BikesStored.each_with_index { |bike, index| return @BikesStored.slice!(index) if bike.working? }

    this.bikesStored.map((bike, index) => {
      if (bike.bikeWorking()) {
        let index = this.bikesStored.indexOf(bike);
        this.bikesStored.splice(index, 1); // remove 1 items at position index.
        return this.bikesStored;
        // this.bikesStored.shift();
        // return this.bikesStored;
      }
    });
    throw new Error("No working bikes currently available");
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
