---
sidebar_position: 1
---

# Appium-Learning-Plan

visit appium.io website for docs & other detail about Appium

#### Software Needed

1. Java 1.8 or higher
2. Android Studio -> Android SDK
   This is required to setup up Android SDK.

   1. Download Android Studio from internet & install on your local machine.
   2. Once android studio is downloaded, open AVD Manager (shows existing emulator or option to create new emulator)
   3. Appium supports Android 4.4 & higher version SDK

3. NodeJS
4. Appium Desktop
   Download Appium installer & install following installation wizard.

#### Appium 2.0 Architecture

#### Installing Appium 2.0 Server

- npm install -g appium@next
- appium driver install xcuitest
- appium driver install uiautomator2
- appium driver list – see list of Appium driver available
- appium driver list –installed – see all installed Appium driver

#### Launching app using Appium

We can launch app in two ways

- `app --> app path`

```
//This will install & launch app
capabilities.setCapability(MobileCapabilityType.APP,System.getProperty("user.dir")+"/src/ApiDemos-debug.apk");
capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME,"uiautomator2");
AppiumDriver driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"),capabilities);
```

Launch app using package & activity name, this is applicable when app is already installed

```
//set driver desired capabilities & install app from given location
    DesiredCapabilities capabilities = new DesiredCapabilities();
    capabilities.setCapability(AndroidMobileCapabilityType.APP_PACKAGE,"io.appium.android.apis");
    capabilities.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY,".ApiDemos");
    capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME,"uiautomator2");
    // Setting the platform name to Android.
    capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME,"Android");

    // Setting the device name to emulator-5554 -> this specifies on which device you want to run
    capabilities.setCapability(MobileCapabilityType.UDID,"emulator-5554");

    AppiumDriver driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"),capabilities);
    driver.findElement(By.xpath("//android.widget.TextView[@text='Views']")).click();
```

Note - MobileCapabilityType is common for Android and iOS platform

- `appPackage and appActivity --> app`

#### Connecting to Real devices

- Connect the device through the UDB cable to the desktop machine (can be connected through bluetooth or Wifi)
- Enable the developer options in the mobile
- Open settings app in the mobile
- Select system a About phone
- Scroll to the bottom and tap build number 7 times
- Returns to the previous screen to find the **developer options** near the bottom
- Scroll down and enable debugging
- Accept the popup in mobile
- Type **adb devices** in the cmd
- You should see an entry of a device with udid mentioned

#### How to find appPackage and appActivity

- adb devices -> Should list device name
- Open the application in the app to find appPack and appAct
- If the application is not installed, adb install apkPath/apkfilename.apk

#### Driver CLI commands

#### Locating element using inspector

#### Platform-wise Desired Capabilities

#### Start Appium Server programmatically

#### Understanding Appium Server logs

#### Appium Driver and plugin commands

#### managing dependencies in Appium 2.0

#### Appium Gestures using W3C spec

#### Swipe

#### LongPress

#### Double Tap

#### Dram and Drop

#### Explore Mobile : Endpoints for the same gesture on both Android and iOS

#### Create our own complex gestures using above endpoints

#### Different ways to locator strategy for iOS and Android

#### Automating Hybrid application

#### Video recording API

#### Simulate SMS only for Android

#### Run ADB Shell commands via Appium

#### Sending photos on iOS-Simulator and Android

#### Understand Appium Server session

#### Using Appium plugins to run tests in parallel on both android and iOS devices/simulators

## Use cases

#### Automating mobile games with Appium and AltUnity Tester (https://www.youtube.com/watch?v=hSn6qwh6b28)

#### Multi-Platform testing (Audio-Video conferencing)

#### User/Document validation with device camera

#### OTP authentication using SMS/call

#### Payments testing on the Web

```

```
