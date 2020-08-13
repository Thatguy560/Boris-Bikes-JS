"use strict";

describe("Bike", () => {
  let bike;
  beforeEach(() => {
    bike = new Bike();
  });

  it("gives you the option to check if a given bike is working", () => {
    expect(bike.bikeWorking()).toBe(true);
  });

  it("can be reported broken", () => {
    bike.reportBroken();
    expect(bike.bikeWorking()).toBe(false);
  });
});
