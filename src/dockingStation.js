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
    // this.bikesStored.shift();
    // return this.bikesStored;

    // // @BikesStored.each_with_index { |bike, index| return @BikesStored.slice!(index) if bike.working? }

    // this.bikesStored.forEach(bike, index => console.log(this.bikesStored.charAt(index))) if bikeWorking()
    this.bikesStored.map((bike, index) => {
      if (bike.bikeWorking()) {
        // return bike;
        this.bikesStored.shift();
        return this.bikesStored;
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
