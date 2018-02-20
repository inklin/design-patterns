/* A constructor for defining new buses
 * Default of yellow color, 2 doors, and 30 person capacity.
 */
function Bus(options) {
  const defaultDoors = 2;
  const defaultCapacity = 30;
  const defaultColor = 'yellow';

  this.doors = options.doors || defaultDoors;
  this.capacity = options.capacity || defaultCapacity;
  this.color = options.color || defaultColor;
}

/* A constructor for defining new Trucks
 * Default of blue color, large wheels, and two doors.
 */
function Truck(options) {
  const defaultWheelSize = 'large';
  const defaultColor = 'blue';
  const defaultDoors = 2;

  this.defaultWheelSize = options.defaultWheelSize || defaultWheelSize;
  this.color = options.color || defaultColor;
  this.doors = options.doors || defaultDoors;
}

/* 
 * This is the sekeleton of the vehicle factory
 */
function VehicleFactory() {}

VehicleFactory.prototype.createVehicle = function(options) {
  switch (options.vehicleType) {
    case 'Truck':
      this.vehicleClass = Truck;
      break;
    case 'Bus': 
      this.vehicleClass = Bus;
      break;
  }

  return new this.vehicleClass(options);
}


/* Let's create a bus using our vehicle factory.
 * We will pass in the color and vehicleType.
 */
var vehicleFactory = new VehicleFactory();
var bus = vehicleFactory.createVehicle({
  color: 'Lime Green',
  vehicleType: 'Bus'
});

console.log('Our lime green bus is a Bus vehicle type: ', bus instanceof Bus);
// Outputs: 
// Bus { doors: 2, capacity: 30, color: 'Lime Green' }
console.log(bus);

/* We can also create a truck using our vehicle factory
 */
var truck = vehicleFactory.createVehicle({
  vehicleType: 'Truck'
});

// Outputs:
// Truck { defaultWheelSize: 'large', color: 'blue', doors: 2 }
console.log(truck)