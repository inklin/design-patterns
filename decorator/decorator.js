/* This is the base class (or "base drink" in this case)
 * that we are going to decorate.
 */
function MilkTea() {
  this.storeName = function() {
    return 'Chatime';
  };

  this.cost = function() {
    return 3.50;
  };

  this.volumeCC = function() {
    return 200;
  };

  this.ingredients = function() {
    return ['milk', 'tea'];
  };
}

/* Decorator #1:
 * The tapioca pearl decorator:
 * This adds tapioca pearls to our milk tea
 * and increases the cost.
 */
function TapiocaPearls(milkTea) {
  var c = milkTea.cost();
  var i = milkTea.ingredients();

  milkTea.cost = function() {
    return c + 0.50;
  };

  milkTea.ingredients = function() {
    i.push('tapioca');
    return i;
  };
}

/* Decorator #2:
 * The "super-size" decorator:
 * This increases the size of our bubble tea
 * and the volume of the cup.
 */

function SuperSize(milkTea) {
  var c = milkTea.cost();
  var v = milkTea.volumeCC();

  milkTea.cost = function() {
    return c + 2.00;
  };

  milkTea.volumeCC = function() {
    return v + 100;
  };
}

/* Decorator #3:
 * The grass jelly decorator:
 * This adds grass jelly to our milk tea
 * ingredients and increases the cost.
 */
function GrassJelly(milkTea) {
  var c = milkTea.cost();
  var i = milkTea.ingredients();

  milkTea.cost = function() {
    return c + 0.75;
  };

  milkTea.ingredients = function() {
    i.push('grass jelly');
    return i;
  };
}

var milkTea = new MilkTea();
GrassJelly(milkTea);
SuperSize(milkTea);
TapiocaPearls(milkTea);

console.log('My Custom Milk Tea:');
console.log('- added Grass Jelly and Tapioca, super sized');
console.log('Store name: ', milkTea.storeName());
console.log('Cost: $', milkTea.cost());
console.log('Ingredients: ', milkTea.ingredients());
console.log('Volume: ', milkTea.volumeCC());