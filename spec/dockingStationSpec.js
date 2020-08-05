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

  it("can dock a bike at the docking station", () => {
    dockingstation.dock(bike);
    expect(dockingstation.bikesAvailable()).toEqual(1);
  });
});
