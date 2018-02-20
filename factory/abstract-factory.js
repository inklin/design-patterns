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

/* NOTE:
 * Here if we had defined the methods right instead the constructor above such as that
 *
 * function Truck(options) {
 *   this.drive = function() {
 *     console.log('driving the truck!');
 *   }
 * }
 *
 * The method is being bound with the "this" keyword, meaning this method is only
 * available to this particular instance. It does not have a relationship with an object
 * instance of this constructor.
 *
 * Every method attached via "this" will get re-decalared for every instance we create,
 * which can affect memory usage of the application if we are creating many many instances.
 *
 * A better way is to add the method through the object's prototype.
 * The prototype allows us to easily define methods for all instances of the object, while
 * saving memory.
 *
 * Since the break and drive methods are only applied to the prototype object, they are only
 * stored once. Objects that are from the same constructor will point to a common prototype object.
 */
Truck.prototype.brake = function() {
  console.log(`the ${this.color} truck is slowing down...`);
}

Truck.prototype.drive = function() {
  console.log(`the ${this.color} truck is moving!`);
}

/* Abstract vehicle factory */
function AbstractVehicleFactory() {
  // a directory for our vehicle types
  var types = {};

  return {
    getVehicle: function(type, vehicleCustomizations) {
      var Vehicle = types[type];

      return (Vehicle ? new Vehicle(vehicleCustomizations) : null);
    },

    registerVehicle: function(type, Vehicle) {
      var proto = Vehicle.prototype;

      // Only classes that fulfill the vehicle contract of driving and braking will be registered as vehicles
      // that the factory will build!
      if (proto.drive && proto.brake) {
        types[type] = Vehicle;
      }

      return abstractVehicleFactory;
    }
  }
}

var abstractVehicleFactory = new AbstractVehicleFactory();

abstractVehicleFactory.registerVehicle("truck", Truck);

var car = abstractVehicleFactory.getVehicle('car', {
  color: 'disco pink',
  doors: 2
});

// This will return null since Car has not implemented the proper
// drive and brake functions
console.log(car);

var truck = abstractVehicleFactory.getVehicle('truck', {
  color: 'ocean blue',
  doors: 1
});

// Output: { defaultWheelSize: 'large', color: 'ocean blue', doors: 1 }
console.log(truck);
// Output: the ocean blue truck is moving!
truck.drive();
// Output: the ocean blue truck is slowing down...
truck.brake();