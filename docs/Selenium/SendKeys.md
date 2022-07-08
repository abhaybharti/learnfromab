---
sidebar_position: 1
---

# SendKeys

The Sendkeys command scrolls into view the form control element and then sends the provided keys to the element. In case the element is not keyboard-interactable, an **element not interactable error is returned**.

```
element.sendKeys(“java”);
element.sendKeys(Keys.ENTER);
element.sendKeys(Keys.TAB);
```

or

```
element.sendKeys(“java”, Keys.ENTER, Keys.TAB);
```
