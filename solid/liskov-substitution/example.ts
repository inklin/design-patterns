class Bird {
  public name : string;
  public isFlying : boolean;

  constructor(name: string) {
    this.name = name;
  }

  eat(food) {
    if (food === 'bread' || food === 'worms') {
      console.log('Yumm yumm!');
    } else {
      throw new Error(`Birds do not eat ${ food }`);
    }
  }

  fly(): void {
    this.isFlying = true;
    /* some code here that makes our bird flap its wings
     */
  }
}

class Penguin extends Bird {
  eat(food) {
    /* Here we have overriden the parent method eat, and made it stricter than the Bird class!
     * We have broken our existing program. A program that works with Bird should also work with Penguin,
     * but here the behaviour has changed.
     */
    if (food === 'bread') {
      console.log('Yumm yumm!');
    } else {
      throw new Error(`Penguins only eat bread!`);
    }
  }
  fly(): void {
    /* No-op: does nothing since a penguin cannot fly
     *
     * We are overriding the parent method. We have broken the promise of the
     * parent method where the isFlying variable would be true if the fly function is called.
     * We have violated the liskov substitution principle. :(
     */
  }
}

var tweety = new Bird('Tweety');
tweety.eat('worms'); // Yumm yumm!
tweety.fly(); // isFlying === true

/* Since this code works, any subtypes of Bird should also work with the code above.
 * However, if we create an instance of Penguin. We will see that Liskov Substitution 
 * principle is broken and so is our code. :(
 */
var pingu = new Penguin('Pingu');
pingu.fly(); // isFlying !== true
pingu.eat('worms'); // Error: Pengins only eat bread!