class Vehicle {
  constructor(type, model, parts, fuel) {
    this.type = type;
    this.model = model;
    this.parts = parts;
    this.fuel = fuel;
    this.parts.quality = parts.engine * parts.power;
  }

  drive(fuelLoss) {
    this.fuel -= fuelLoss;
  }
}

// classes are SYNTAX SUGAR! under the hood its functions!
// function vehicle(type, model, parts, fuel)

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
