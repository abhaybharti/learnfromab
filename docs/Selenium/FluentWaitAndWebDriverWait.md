---
sidebar_position: 1
---

# FluentWaitAndWebDriverWait

## How FluentWait and WebDriverWait are interrelated and major difference between them

FluentWait class is provided to wait around any type of object in your scripts. However if you have to wait around WebDriver object then we have specific WebDriverWait class which extends FluentWait class with WebDriver object only. FluentWait does not ignore any exception by default whereas WebDriverWait ignores NotFoundException, NoSuchFrameException, NoSuchShadowRootException etc which extends NotFoundException class are ignored by default.

WebDriverWait is a subclass of FluentWait hence it has all the features of FluentWait. The expected condition in ExplicitWait are many implementations of the functional interface which act as an argument for the until() method of wait class.

Class declaration statements are as follows -

```
public class FluentWait<T> implements Wait<T> {}

public class WebDriverWait extends FluentWait<WebDriver> {}
```

### When to use FluentWait or WebDriverWait

Use FluentWait if you want to wait until a File is downloaded or wait around Connection object to wait for some records to be available in database, more similar condition

Use WebDriverWait if you want to wait until any condition around WebDriver Object
