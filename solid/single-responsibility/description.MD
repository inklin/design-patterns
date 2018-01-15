Single Responsibility Principle
=======

_A class should only have one reason to change._

## AKA: Swiss army knife - just because you can does not mean you should.

Every function should "do one thing", or have high cohesion. This means it has one responsibility and does not do more than it should. Usually classes start off small, but with more features can turn into monster classes that have many responsibilities, these should be refactored!

Tips on how to define task scope/"one thing":

* Notice how you are naming the function. "updateUserAndSendNotification" would not being doing one thing!
* When writing a function, look for reusable parts that can be extracted into a smaller function.
* When smaller functions are always called together, to avoid repetition, you can encapsulate them with a bigger function. This is ok as long as the containing functions are pure, independent functions.