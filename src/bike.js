"use strict";

class Bike {
  constructor() {
    this.working = true;
  }

  bikeWorking() {
    return this.working;
  }

  reportBroken() {
    return (this.working = false);
  }
}

module.exports = Bike;
