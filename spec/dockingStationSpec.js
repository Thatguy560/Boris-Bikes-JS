"use strict";

describe("Dockingstation", () => {
  let dockingstation;
  let bike;
  let brokenbike;

  beforeEach(() => {
    bike = jasmine.createSpy("bike");
    bike = jasmine.createSpyObj("bike", ["working"]);
    // brokenbike.working.and.returnValue(false);
    dockingstation = new Dockingstation();
  });

  it("has no bikes by default", () => {
    expect(dockingstation.bikesAvailable()).toEqual(0);
  });

  it("can release a bike", () => {
    for (let i = 0; i < 5; i++) {
      dockingstation.dock(bike);
    }
    dockingstation.releaseBike();
    expect(dockingstation.bikesAvailable()).toEqual(4);
  });

  it("can dock a bike at the docking station", () => {
    dockingstation.dock(bike);
    expect(dockingstation.bikesAvailable()).toEqual(1);
  });

  it("will let you see all the available bikes in the docking station", () => {
    bike = new Bike();
    dockingstation.dock(bike);
    expect(dockingstation.viewAvailableBikes()).toEqual([bike]);
    console.log(dockingstation);
  });

  it("will raise an error if asked to dock a bike when overcapacity", () => {
    for (let i = 0; i < dockingstation.defaultCapacity; i++) {
      dockingstation.dock(bike);
      console.log(dockingstation.bikesAvailable());
    }
    expect(() => {
      dockingstation.dock(bike);
    }).toThrowError("Can't dock bike, station is at max capacity.");
  });
});
