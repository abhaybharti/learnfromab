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

#### How to install Android Studio

- Download Android Studio from internet and install on your local machine
- Once Android Studio is installed, open Android Studio, open AVD Manager (It shows existing emulator or option to create new simulator)

#### Configure SDK Tools

1. Go to path - C:\Users\xxxxx\AppData\Local\Android\Sdk
2. Add ANDROID_HOME = C:\Users\xxxxx\AppData\Local\Android\Sdk in environment variable
3. Add following 3 paths in **PATH** variable
   a. C:\Users\xxxxx\AppData\Local\Android\Sdk\tools
   b. C:\Users\xxxxx\AppData\Local\Android\Sdk\tools\bin
   c. C:\Users\xxxxx\AppData\Local\Android\Sdk\platform-tools

#### Installing Appium 2.0 Server

- npm install -g appium@next
- appium driver install xcuitest
- appium driver install uiautomator2
- appium driver list – see list of Appium driver available
- appium driver list –installed – see all installed Appium driver

#### Verify Dependencies are installed with Appium Doctor

- npm install -g appium-doctor : Appium doctor is a CLI that provides insights on what dependencies are missing as well as how to install them.
- appium-doctor -–android : For only android
- appium-doctor -–ios :For only ios

If I run it at this point in time, it intelligently warns me about the required dependencies that are installed, optional dependencies that could be installed, and how to go about installing them.

```
C:\Users\xxxxx>appium-doctor --android
info AppiumDoctor Appium Doctor v.1.16.0
info AppiumDoctor ### Diagnostic for necessary dependencies starting ###
info AppiumDoctor  ✔ The Node.js binary was found at: C:\Program Files\nodejs\node.EXE
info AppiumDoctor  ✔ Node version is 14.18.1
info AppiumDoctor  ✔ ANDROID_HOME is set to: C:\Users\xxxxx\AppData\Local\Android\Sdk
info AppiumDoctor  ✔ JAVA_HOME is set to: C:\Program Files\Microsoft\jdk-16.0.2.7-hotspot
info AppiumDoctor    Checking adb, android, emulator
info AppiumDoctor      'adb' is in C:\Users\xxxxx\AppData\Local\Android\Sdk\platform-tools\adb.exe
info AppiumDoctor      'android' is in C:\Users\xxxxx\AppData\Local\Android\Sdk\tools\android.bat
info AppiumDoctor      'emulator' is in C:\Users\xxxxx\AppData\Local\Android\Sdk\emulator\emulator.exe
info AppiumDoctor  ✔ adb, android, emulator exist: C:\Users\xxxxx\AppData\Local\Android\Sdk
info AppiumDoctor  ✔ 'bin' subfolder exists under 'C:\Program Files\Microsoft\jdk-16.0.2.7-hotspot'
info AppiumDoctor ### Diagnostic for necessary dependencies completed, no fix needed. ###
info AppiumDoctor
info AppiumDoctor ### Diagnostic for optional dependencies starting ###
WARN AppiumDoctor  ✖ opencv4nodejs cannot be found.
WARN AppiumDoctor  ✖ ffmpeg cannot be found
WARN AppiumDoctor  ✖ mjpeg-consumer cannot be found.
WARN AppiumDoctor  ✖ bundletool.jar cannot be found
WARN AppiumDoctor  ✖ gst-launch-1.0.exe and/or gst-inspect-1.0.exe cannot be found
info AppiumDoctor ### Diagnostic for optional dependencies completed, 5 fixes possible. ###
info AppiumDoctor
info AppiumDoctor ### Optional Manual Fixes ###
info AppiumDoctor The configuration can install optionally. Please do the following manually:
WARN AppiumDoctor  ➜ Why opencv4nodejs is needed and how to install it: https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/image-comparison.md
WARN AppiumDoctor  ➜ ffmpeg is needed to record screen features. Please read https://www.ffmpeg.org/ to install it
WARN AppiumDoctor  ➜ mjpeg-consumer module is required to use MJPEG-over-HTTP features. Please install it with 'npm i -g mjpeg-consumer'.
WARN AppiumDoctor  ➜ bundletool.jar is used to handle Android App Bundle. Please read http://appium.io/docs/en/writing-running-appium/android/android-appbundle/ to install it. Also consider adding the ".jar" extension into your PATHEXT environment variable in order to fix the problem for Windows
WARN AppiumDoctor  ➜ gst-launch-1.0.exe and gst-inspect-1.0.exe are used to stream the screen of the device under test. Please read https://appium.io/docs/en/writing-running-appium/android/android-screen-streaming/ to install them and for more details
info AppiumDoctor
info AppiumDoctor ###
info AppiumDoctor
info AppiumDoctor Bye! Run appium-doctor again when all manual fixes have been applied!
info AppiumDoctor
```

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
