"use strict";

describe("DockingStation", () => {
  let dockingstation;
  let bike;
  let brokenbike;

  beforeEach(() => {
    bike = jasmine.createSpy("bike");
    bike = jasmine.createSpyObj("bike", ["working"]);
    // brokenbike.working.and.returnValue(false);
    dockingstation = new DockingStation();
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

  // Doesn't currently work
  it("will let you see all the available bikes in the docking station", () => {
    bike = new Bike();
    dockingstation.dock(bike);
    expect(dockingstation.viewAvailableBikes()).toEqual[
      Bike({ working: true })
    ];
    // console.log(dockingstation);
  });

  it("will raise an error if asked to dock a bike when overcapacity", () => {
    for (let i = 0; i < dockingstation.defaultCapacity; i++) {
      dockingstation.dock(bike);
    }
    expect(() => {
      dockingstation.dock(bike);
    }).toThrowError("Can't dock bike, station is at max capacity.");
  });

  it("will raise an error if asked to release bikes and there are none available", () => {
    expect(() => {
      dockingstation.releaseBike();
    }).toThrowError("No bikes available");
  });
});
