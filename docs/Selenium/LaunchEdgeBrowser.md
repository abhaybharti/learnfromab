---
sidebar_position: 1
---

# LaunchEdgeBrowser

## Launch Edge Browser in Selenium 4

```
FirefoxOptions firefox_options = new FirefoxOptions();
firefox_options.addPreference("browser.download.manager.showWhenStarting", false);
firefox_options.addPreference("browser.download.manager.showAlertOnComplete", false);
firefox_options.addPreference("browser.download.manager.useWindow", false);
firefox_options.addPreference("browser.helperApps.neverAsk.saveToDisk", "application/x-gtar, application/x-tgz, application/x-compressed, application/x-tar, text/csv");
firefox_options.addPreference("browser.helperApps.neverAsk.openFile", "application/x-gtar, application/x-tgz, application/x-compressed, application/x-tar, text/csv");
String geckodriver_path = "C://geckodriver_path";
System.setProperty("webdriver.gecko.driver", geckodriver_path);
FirefoxOptions browserOptions = new FirefoxOptions();
LoggingPreferences firefoxLogPrefs = new LoggingPreferences();
firefoxLogPrefs.enable("browser", Level.ALL);
browserOptions.setPlatformName("Windows 10");
browserOptions.setBrowserVersion("92");
Map<String, Object> cloudOptions = new HashMap();
browserOptions.setCapability("cloud:options", cloudOptions);
this.driver = new FirefoxDriver(firefox_options);
```
