## Design Patterns with JavaScript

> Factory Pattern

** What **
- a creational pattern for creating objects
- provides a generic interface for creating objects, we can specify the type of factory object we want to create

** Why **
- when the object setup involves a high level of complexity
- useful when you are working with objects that are different but at the same time have many characteristics (methods and properties) in common

** Example ** 
Imagine we have a "Vehicle" factory where we are asked to create a certain car. Instead of creating the car directly using the `new` operator, we ask the Factory object for a new vehicle instead. We tell the Factory what type of object (car) is required and it instantiates it, then returns it for us to use.