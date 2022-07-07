---
sidebar_position: 1
---

# Abstraction

### What is Abstraction

It refers to hiding non essential details. following questions can help to understand it better.

- Who is hiding what kind of details here and what did I mean by non essential detail?
- From whom do we want to hide those details?
- How we are going to hide those details?

Abstraction can be visualized with two forms

### Data Abstraction

The process of identifying only the required attributes of an object which discarding the irrelevant details is known as data abstractions. Example - In Java, HashMap or HashSet the implementation details are hidden from the users and provided only the operation to interact with the data type.

### Behavior Abstraction

### How abstraction helps

- It gives us ability to conceptualise things keeping the focus on what factors instead of how.
- It allows us to manage complexity at different levels (package, class, interface and method)
- It helps us to design simple with a provision expand later

### How abstraction is implemented

In an OOPs programming language, we can implement abstraction using interface or abstract class.

### When to use an abstraction class

if we need to have any default behavior in the base class and would like to force the sub classes to provided specific behavior.

### When to use an interface

- if the client wants to deal only with type without caring about actual implementation
- If the design is evolving with frequent changes, interface is preferable because it provides more design flexibility

#### Example 1 (Selenium Java Binding -> ChromeDriver implementation)

- **WebDriver** is an **interface** we use in Selenium
- **RemoteWebDriver** is a class which implements **WebDriver** interface
- **ChromiumDriver** is a class which extends from **RemoteWebDriver**
- **ChromeDriver** is a class which extends from ChromiumDriver

#### Example 2 (Creating test data parser for automation framework)

We need to design a test data parser support for a test automation framework. As of now, we need to support for excel or json files as data source. Design should be flexible to support any new test data source in future.

`TestDataParser interface`

```
 public interface TestDataParser{
    public void parseTestData();
 }

```

`JsonTestDataParser implementation`

```
 public class JsonTestDataParser implements TestDataParser{
    public void parseTestData(){
        //TBD
    }
 }

```

`ExcelTestDataParser implementation`

```
 public class ExcelTestDataParser implements TestDataParser{
    public void parseTestData(){
        //TBD
    }
 }

```
