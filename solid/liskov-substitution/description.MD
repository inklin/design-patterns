Liskcov substitution principle
=======

_Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T._

## AKA: if it looks like a duck, quacks like a duck, then it should not need batteries!

Eevery subclass/derived class should be substitutable for their base/parent class.

A subclass should NOT override a parent class method in a way that breaks functionality from a client's point of view. 

* No new exceptions should be thrown in the derived class.
* Pre-conditions cannot be strengthed. Example: parent class uses an integer attribute, now the child class requires it to be a positive integer. Any code that worked fine before with negative integers is now broken by using the child class.
* Note: sometimes what makes sense in natural language does not always make sense in code! Example: In natural language, a `square` is a `rectangle`. However, a rectangle has a width and a height, while a square has equal sides. The abstraction of having a square inherit from a rectangle is a bad idea.