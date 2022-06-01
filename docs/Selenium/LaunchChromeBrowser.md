---
sidebar_position: 1
---

# LaunchChromeBrowser

## Launch Chrome Browser in Selenium 4

```
chromedriver_path = "C://chromedriver_path";
System.setProperty("webdriver.chrome.driver", chromedriver_path);
ChromeOptions chrome_options = new ChromeOptions();
chrome_options.addArguments(new String[]{"--no-sandbox"});
chrome_options.addArguments(new String[]{"--disable-gpu"});
chrome_options.setAcceptInsecureCerts(true);
chrome_options.setPageLoadStrategy(PageLoadStrategy.NORMAL);
LoggingPreferences logPrefs = new LoggingPreferences();
logPrefs.enable("browser", Level.ALL);
WebDriver driver = new ChromeDriver(chrome_options);
```
