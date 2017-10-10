## Design Patterns with JavaScript

> Adapter Pattern

** Why **

This pattern is used when you have existing interfaces that are incompatible with eachother. It works just like how a power adapter can help you plug a 3-prong power cord into a 2-prong power outlet. We do not need to buy a new power cord, or change the power outlet in any way. Similarily, the adapter pattern allows you to use existing but incompatible classes with each other, without modifying the source code. 

Adapters can be handy when you are working with external APIs. Ideally, an API wouldn't change once it's released. However, say one of the method names changes. You would have to change all the places in your code that use the old method name to the new method name. This is where an adapter comes in handy, it acts as a wrapper for the API (which we do not have control over and may change over time) and would be the only place we need to update to the new method name.

** How **

You have 3 parts: 

* Client
The client wants to use a certain interface with the adaptee, but the adaptee accepts a different interface. Instead, the client calls methods on the adapter, which redirects the calls to the adaptee. 

* Adapter
This can also be thought of as a "wrapper". It maps the client to the adaptee.

* Adaptee
The adaptee's method gets called by the adapter methods. It does not have to change its existing interface to suit the client's needs.

** Check list **
1. Identify the client and the adaptee: What needs to be accommodated? (Client) What needs to be adapted? (Adaptee)
2. Identify the interface that the client requires
3. Create a wrapper class that can match the interface of the adaptee with what the client needs (maps to the adaptee)
4. Create an instance of the adaptee class in the adapter class
5. The client uses the adapter, which in turn uses the adaptee

** Example **

Creating a wrapper for the Google Place API - specifically the place Autocomplete function

Client:
Accepts: parameter object
Such as {input: 'London, UK'}
Returns: Promise<Array> 

Adaptee:
Google Place Place AutoComplete function

Accepts: HTTP request
in the form of https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters
Returns: google place predictions in json or xml

We can create a wrapper for the Google Place API, so that if we needed to update how we use the API, we only need to change it in one place, instead of all the different places the API is used.
