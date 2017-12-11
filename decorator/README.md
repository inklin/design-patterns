## Design Patterns with JavaScript

> Decorator Pattern

** Why **
- a flexible alternative to sub-classing
- useful when we want to give some additional behaviour to an individual object, without affecting the behaviour of other objects from the same class
- when you want to extend behaviours and features, you can create a sub-class
- when you want to extend MANY behaviours and features, using sub-classes becomes more complex (you would have to define as many subclasses as features) --> this is where the decorator pattern can help.
- inheritance extends objects linearly, but with the decorator pattern, you have a single base object and progressively add decorator objects that provide additional capabilities

** Example **
Let's look at a simple example using my favourite beverage, bubble tea! Contrary to popular belief, bubble tea does not come with "bubbles" or tapioca balls. The original term "bubble" came from the small foam bubbles at the top of the drink from shaking the milk tea.

When you order a bubble tea, you are paying for plain milk tea. You can substitute the powder milk for real milk or soy milk for an additional cost. You can also add all types of toppings such as tapioca pearls, grass jelly, and fresh taro. You can also decide to change it to a hot beverage (on a side note, I have never understood why hot and cold drinks with the same ingredients should differ in cost).

We could use sub classes and have Milk Tea be the base class. Then, we would have sub classes Milk Tea with Tapioca, Milk Tea with Fresh Taro, Milk Tea with Fresh Taro and Tapioca... imagine all the possibilities!

We can use the decorator pattern to create all these bubble tea variations.