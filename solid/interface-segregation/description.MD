Interface Segregation Principle
=======

_A client should never be forced to implement an interface that it does not use, or clients shouldn't be forced to depend on methods they do not use._

## AKA: Dongle life... where should I plug this in? 

Avoid creating bloated interfaces. When you expose a module for outside usage, make sure only the bare essentials are required. You do not want to force the client to implement a bunch of behaviours that are not needed.

This principle is similar to the single responsibility principle. It can be seen as the application of the single-responsibility principle to an object's public interface.

* The operation `signature`: Each operation declared by an object specifies the objects name, the objects it takes as parameters, and the operations return value
* An object's `interface`: The set of all signatures defined by the objects operations -> these are the complete set of requests that can be sent to the object