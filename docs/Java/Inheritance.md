---
sidebar_position: 1
---

# inheritance

### What is Inheritance

It is a mechanism of creating new classes using the classes that has already been defined. From this definition, we may think that the primary purpose of inheritance is to reuse code but which is not always true.

### why do we need inheritance

#### To achieve categorization

- Inheritance helps to group objects into categories for a specific purpose. E.g. a car, bus, trunk can be categorized as a type vehicle where each of those are unqiue but still have common properties of vehicle like having wheels that support rotation in left and right direction. It gives a clear understanding of the object and differences based on the categories.

#### To Achieve modularity

Modularity is the process of decomposing a program into a set of modules so as to reduce the overall complexity of the problem. Inheritance supports modularity by allowing us to create smaller sub classes where each sub class is solving some unique problem. For example we have a parent calculator class and we have two child classes performing basic and scientific calculations.

#### To Achieve clear representation of concepts and separation of concerns

Separation of concern means focusing on one thing at a time. There are two rules that can help to identify the concerns of a software development:

- The reason of change
- The frequency of change

Separating components based on the representation of concepts and areas of concerns can help in various ways like :

- Classes can be changed frequently based on the need without effecting the others
- Classes can be changed for different reasons without effecting the others

#### Implementation in Test Automation Framework

We can implement, when we create page classes to mimic the real world web pages. We create a base page class and derive all the child page object classes from that. Each page class can have its own responsibility and reason for change. Each page page class can reuse base class's common properties/methods.

### What are the different type of inheritance

#### Implementation Inheritance (Class Inheritance)

When we create a sub class, we extend parent class's functionality by inheriting the properties/methods. Code reuse and modularity are the benefits of implementation inheritance. But Sub class will be tightly coupled with the parent class. Any change in parent class may need the understanding of all the sub classes to avoid breaking them.

Example - Page classes derived from base page class

#### Interface Inheritance (Type inheritance)

Instead of inheriting from class we can also inherit from interface by implementing the methods defined in interface. This helps in removing the tight coupling between parent and child classes. Each child class can have its own implementation which may be similar but not same as the other classes. Need to be careful to not break the inherited classes by changing the interfaces or forcing the classes to implement a method which it does not need. We can not achieve direct code reuse here since interface can only declare methods but does not provide implementation.

Example - Driver interface with browser specific implementation classes

### How to achieve code reuse using inheritance

#### Using implementation inheritance

It is IS-A or IS-AN relationship between base and subtype. Page Object classes share IS-A relationship with Page Base class. This has a limitation, just consider a situation when new page classes are getting added to the application, we also need to add new page classes to the framework which may be difficult to manage and maintain in long run.

#### Using Composition

It is HAS-A/HAS-AN relationship between two classes.

### What are benefits of inheritance

### What are pitfalls of inheritance

- Tight binding between base class and its sub class
- Make code difficult to change
- Relationship cannot be changed at run time

### How can we use inheritance in a test automation framework
