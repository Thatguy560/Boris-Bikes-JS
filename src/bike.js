"use strict";

class Bike {
  constructor() {
    this.working = true;
  }

  working() {
    return this.working;
  }

  reportBroken() {
    return (this.working = false);
  }
}
