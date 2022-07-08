---
sidebar_position: 1
---

# what is encapsulation and why it is used

## what is encapsulation

It is a process of binding data and methods that can control the data together into a single unit (class). The designer of the unit (class) can decide what kind of access it may allow to the outsiders and how that can be achieved. It is hiding of internal data and allows connecting with other components with predefined boundaries and contracts.

### why it is needed

The basic use of encapsulation is to hide the components of a class and their implementation. People who will use them doesn't need to know how they are working inside. It provides better security and also abstraction. With this isolation we can do a lot more with the data.

When we try to operate on public variables, one can set any values to them. For example, firstName can be set with null, a string with special characters or numbers.

Instead, if we have declared as private variables, then in the setter method we can do initial business checks before setting the values to the variables.

The same gets applied for getter methods. You have the control to return a default value if some variable is null or not in the desired state.

Basics: Methods bring better control than variables.

### How Encapsulation is different from Abstraction

- Abstraction hides complexity but encapsulation hides data by controlling the visibility
- Abstraction is more inclined towards design level where as encapsulation is more inclined towards implementation level
- Abstraction provides information about what a component supposed to do where as encapsulation helps to achieve it in a control manner using data binding with methods.

### How to implement Encapsulation

Here are some ways we can implement encapsulation in code:

- Using private variables
- Using getter and setter methods
- Using read only class (only getter methods with be provided)
- Using write only class (only setter method will be provided)

### Benefits of Encapsulation

- Encapsulation makes the code modular by binding data and methods to manipulate that data under one unit (class)
- it allow the designer to be flexible to take a call on what to protect and what to expose to the outside of the unit based based on design decisions
- Helps in maintaining data integrity by preventing unintentional data modification or corruption

### How to select right access level in the class

- We should declare the instance variable (attribute or fields) as private and provide public getter setters methods if we want to give controlled access to the calling class objects
- If we do not want to modify the state of the object, read only class (only with getter methods) can help
- Protected variables and methods should be used only if sub class absolutely needs those
- Internal methods used in a class as support methods to the main logics should be always private

### Is it possible to access private methods/properties from outside the class

- Answer is Yes and No. We cannot directly access private method/properties from outside the class. We should also understand reason behind adding private access.
- Some time, we may need to access private method/properties for unit testing purpose.
- In Java, we can reflection APIs to call a private method from another class

### How to use Encapsulation in a test automation
