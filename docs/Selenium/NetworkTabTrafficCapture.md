---
sidebar_position: 1
---

# How to Capture Chrome browser Network Tab traffic

### Enable listener & Start capturing Network traffic

```
//Create chrome driver object
ChromeDriver chromeDriver = New ChromeDriver();

//Create Dev tools object
DevTools devTool = chromeDriver.getDevTools();

//create session
devTool.createSession();

//Enable Performance metrics
devTool.send(Performance.enable(Optional.empty()));
metricList = devTool.send(Performance.getMetrics());
metricNames = metricList.stream()
    .map(o -> o.getName())
    .collect(Collectors.toList());

//Enable JS error capturing
Consumer<JavascriptException> addEntry = jsExceptionsList::add;
devTool.getDomains().events().addJavascriptExceptionListener(addEntry);

//Enable network capture
devTool.send(new Command<>("Network.enable", ImmutableMap.of()));

String skipThisListOfXhrURL [] = {"https://dc.services"};

//Listener to catpure Response
devTool.addListener(Network.responseReceived(), response -> {

if (response.getResponse().getStatus() != 200 && !(Arrays.asList(skipThisListOfXhrURL).contains(response.getResponse().getUrl()))) {
    requestid.set(response.getRequestId());
    responseRequestId = response.getRequestId();

    String[][] val_table = new String[2][5];
    val_table[0][0] = "URI";
    val_table[0][1] = "Status";
    val_table[0][2] = "Type";
    val_table[0][3] = "Header";
    val_table[0][4] = "Response Body";

    int iRow = 1;
    val_table[iRow][0] = response.getResponse().getUrl();
    val_table[iRow][1] = String.valueOf(response.getResponse().getStatus());
    val_table[iRow][2] = response.getType().toJson();
    val_table[iRow][3] = String.valueOf(response.getResponse().getHeaders().toJson());
    val_table[iRow][4] = devTool.send(Network.getResponseBody(requestid.get())).getBody();
}
});

    devTool.addListener(Network.loadingFinished(), loadingFinished -> {
        if (requestid.get() != null) {
            System.out.println("Request URL: " + url.get()+", Request id " + loadingFinished.getRequestId()+", Response Body: \n" + devTool.send(Network.getResponseBody(requestid.get())).getBody() + "\n");
        }
    });

    //Listener to capture network calls
    devTool.addListener(Network.requestWillBeSent(), entry -> {
        String authorizationToken = "";
        responseRequestId = entry.getRequestId();
        System.out.println("Request Method : " + entry.getRequest().getMethod()+" , Request URI : " + entry.getRequest().getUrl()+" , Request headers:");
        entry.getRequest().getHeaders().toJson().forEach((k, v) -> logger.info(("\n"+k + ":" + v)));
        try {
            authorizationToken = entry.getRequest().getHeaders().get("Authorization").toString();
        } catch (Exception e) {
            System.out.println("Authorization Token not found");
        }
        if (!StringUtils.isEmpty(authorizationToken)) {
            System.out.println(authorizationToken);
            AUTHORIZATION_TOKEN = xioHelper.readAuthorizationTokenAndSaveAsGlobalValue();
        }
    });
}
```

`Disable Network Capture`

````
public void disableNetworkTrafficCapture() {
    devTool.send(new Command<>("Network.disable", ImmutableMap.of()));
    devTool.send(Performance.disable());
    devTool.getDomains().events().disable();
    System.out.println("Network traffic capture is disabled");
}
 ```
````
