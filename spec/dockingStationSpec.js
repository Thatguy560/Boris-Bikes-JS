"use strict";

describe("DockingStation", () => {
  let dockingstation;
  let bike;
  let brokenbike;

  beforeEach(() => {
    dockingstation = new DockingStation();
    bike = new Bike();
    brokenbike = new Bike();
    // bike = jasmine.createSpyObj("bike", ["bikeWorking", "reportBroken"]);
  });

  describe("For a working bike", () => {
    beforeEach(() => {
      spyOn(bike, "bikeWorking").and.returnValue(true);
    });

    it("can release a bike", () => {
      for (let i = 0; i < 5; i++) {
        dockingstation.dock(bike)
        
      }
      dockingstation.releaseBike();
      expect(dockingstation.bikesAvailable()).toEqual(4);
    });
  })

    describe("For a broken bike", () => {
      beforeEach(() => {
        spyOn(brokenbike, "bikeWorking").and.returnValue(false);
      });

      it("has no bikes by default", () => {
        expect(dockingstation.bikesAvailable()).toEqual(0);
      });
      // Won't release bikes even when working
    

      it("can dock a bike at the docking station", () => {
        dockingstation.dock(bike);
        expect(dockingstation.bikesAvailable()).toEqual(1);
      });

      // Doesn't currently work with viewAvailableBikes cannot be invoked without 'new'
      it("will let you see all the available bikes in the docking station", () => {
        bike = new Bike();
        bike = new Bike();
        dockingstation.dock(bike);
        dockingstation.dock(bike);
        expect(dockingstation.bikesStored).toEqual([bike, bike]);
        // expect(dockingstation.viewAvailableBikes()).toBe[
        //   (Bike({ working: true }), Bike({ working: true }))
        // ];
      });

      it("will raise an error if asked to release bikes and there are none available", () => {
        expect(() => {
          dockingstation.releaseBike();
        }).toThrowError("No bikes available");
      });

      it("will raise an error if asked to dock a bike when overcapacity", () => {
        for (let i = 0; i < dockingstation.stationCapacity; i++) {
          dockingstation.dock(bike);
        }
        expect(() => {
          dockingstation.dock(bike);
        }).toThrowError("Can't dock bike, station is at max capacity.");
      });

      it("Has a variable capacity that can be specified", () => {
        dockingstation = new DockingStation(40);
        expect(dockingstation.stationCapacity).toEqual(40);
      });

      // Works now but releasing bikes method won't work
      it("will raise an error if asked to release bikes and there are none working available", () => {
        brokenbike.reportBroken();
        dockingstation.dock(brokenbike);
        expect(() => {
          dockingstation.releaseBike();
        }).toThrowError("No working bikes currently available");
      });
    ;
  });
});
