---
sidebar_position: 1
---

# ChromeVersionThroughCMD

### How to get Chrome browser version installed on Windows machine

```
public String getChromeVersion() throws IOException {
    String version = null;
    Pattern p = Pattern.compile("(.*)REG_SZ\\s+(\\d+)(.*)");
    Runtime rt = Runtime.getRuntime();
    Process proc = rt.exec("reg query " + "HKEY_CURRENT_USER\\Software\\Google\\Chrome\\BLBeacon " + "/v version");
    BufferedReader stdInput = new BufferedReader(new
        InputStreamReader(proc.getInputStream()));

    BufferedReader stdError = new BufferedReader(new
        InputStreamReader(proc.getErrorStream()));

    // Read the output from the command
    System.out.println("reg query, Command Output:\n");
    String cmdOutput = null;
    String cmdVersionStr = null;
    while ((cmdOutput = stdInput.readLine()) != null) {
      System.out.println(cmdOutput);
      if (cmdOutput.contains("version")) {
        cmdVersionStr = cmdOutput;
      }

    }
    Matcher m = p.matcher(cmdVersionStr);

    if (m.matches()) {
      System.out.println("Browser Version:[" + m.group(2) + "]");
      version = m.group(2).trim();
    }
    // Read any errors from the attempted command
    System.out.println("reg query Command Error (if any):\n");
    while ((cmdOutput = stdError.readLine()) != null) {
      System.out.println(cmdOutput);
    }
    return version;
}
```
