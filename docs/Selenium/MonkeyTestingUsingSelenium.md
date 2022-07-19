---
sidebar_position: 1
---

# MonkeyTestingUsingSelenium

## Test Flow

- Launch Browser
- Load web application
- Find lists of links in a page or a section (using xpath) & WebElement list
- Run a for loop on size of list
- Generate random number & in each iteration, read element from WebElement list using index
- click on link
- Verify link is not broken / Verify URL loaded
- click on back button on browser (driver.navigate().back)
- Find lists of links in a page or a section (using xpath) & WebElement list (This is required to avoid stale element error after page reload)
