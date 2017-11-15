## Design Patterns with JavaScript

> Facade Pattern

** Why **
- You want to hide implementation detail so that the client does not need to think about it
- Simplify or make choices for the calling code
- To create a higher level interface that makes the sub-system easier to use (this interface to other classes should make the usage of the classes easier)

** Example **
We want to store data in different databases. To make the code more maintainable and to be able to easily switch databases, we can first use the adapter pattern. Creating an adapter for each database makes it so that the client does not have to think about how the data is being saved, just that it is saved. We have a .save() function in each of our adapters that takes care of the details of saving to the databases. However, the client still has to decide which adapter to use. We can further simplify the calling code by choosing which adapter to use given the connection string the calling code uses.
