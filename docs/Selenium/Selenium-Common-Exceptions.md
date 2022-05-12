---
sidebar_position: 1
---

# Selenium-Common-Exceptions

### Common Selenium Exceptions

- **`StaleElementReferenceException : `** This exception happens if the web element is detached from the current DOM. There may be a case, when an element was in DOM initially but after modification in the DOM, element becomes stale or has been deleted. If we try an attempt to access this element, StaleElementException is thrown.

**Common Causes** :

- Element is detached from the current DOM (i.e. no loner present in the current DOM)
- Element has been delete from the DOM (Page Refresh or User navigate away from the page or element is replaced with identical attributes)

**Ways to Handle it** :

- Refreshing the page and verifying the element again (no recommended for webpages which are going to erase out session data or user entered data upon refresh)
- Using JavaScript executors to access the element
- Implement try-catch to access the element in catch block if an exception is thrown from try
- Add the explicit wait to wait till the presence of element is detected

- **`NoSuchElementException`** WebDriver is not able to find and locate elements during runtime i.e. FindBy method can not find a particular component.

**Common Causes** :

- Tester may have written incorrect element locator in the findElement(By, by) method
- Name of element may have been changed by the developer
- Position of the element may have changed if XPATH locator was used to identify the element
- Element is taking longer time to load than expected

**Ways to Handle it** :

- Fixing the incorrect locator
- Adding a wait command
- Adding a try/catch block along with explicit wait till the presence of the element is detected

- **`ElementClickInterceptedException`** The command could not be completed as the element receiving the events is concealing the element which was requested clicked.

**Common Causes** :

- There are overlapping elements
- Element has not loaded completely
- Element is disabled
- Element is not under focus or the action is being performed on the incorrect WebElement
- Element can not be located using coordinates on the webpage

**Ways to Handle it** :

- Adding waits till the element is clickable
- Using JavaScriptExecutor for performing the click operation
- To click a non-clickable element, first make sure that overlapping element is closed
- In cases where the element needs focus, switch to the actual element and then perform the click action using Action class
- If coordinates are used to identify the element, first step should be to maximize the browser window

https://evelinedsouza.medium.com/common-selenium-exceptions-part-1-967cf037a20c
