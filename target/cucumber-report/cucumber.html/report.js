$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/org/uk/wcht/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "\nAs a User I want to Login to WCHT Website",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 140924254700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on the Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "Verify User can navigate to Login Page",
  "description": "",
  "id": "login-feature;verify-user-can-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on the Account link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on the Login Link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the Login Register Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 168877300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnTheAccountLink()"
});
formatter.result({
  "duration": 10206637500,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-C1H7GVRS\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\shrad\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52627}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 360cbdb7aea5c5b0fd86782bcd8e881b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat org.uk.wcht.utility.Utility.clickOnElement(Utility.java:37)\r\n\tat org.uk.wcht.pages.HomePage.clickOnYourAccountLink(HomePage.java:41)\r\n\tat org.uk.wcht.cucumber.stepdefs.MyStepdefs.iClickOnTheAccountLink(MyStepdefs.java:24)\r\n\tat ✽.When I click on the Account link(src/test/java/org/uk/wcht/resources/featurefile/login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnTheLoginLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.iCanSeeTheLoginRegisterPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1384214400,
  "status": "passed"
});
formatter.before({
  "duration": 165493529600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on the Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "Verify User in Not Able to Login With Invalid credentials",
  "description": "",
  "id": "login-feature;verify-user-in-not-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on Login Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "System to display Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnLoginPage()"
});
formatter.result({
  "duration": 29221288800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 18
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 44
    }
  ],
  "location": "MyStepdefs.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 693027300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginSubmitButton()"
});
formatter.result({
  "duration": 314371900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.systemToDisplayLoginErrorMessage()"
});
formatter.result({
  "duration": 405719200,
  "status": "passed"
});
formatter.after({
  "duration": 862015300,
  "status": "passed"
});
formatter.uri("src/test/java/org/uk/wcht/resources/featurefile/navigation.feature");
formatter.feature({
  "line": 1,
  "name": "Navigation feature",
  "description": "\nAs a user I want to navigate to pages on WCHT.ORG.UK",
  "id": "navigation-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 168633851000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Able to See Ways to Your Home Page",
  "description": "",
  "id": "navigation-feature;verify-user-able-to-see-ways-to-your-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Your Home Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Pay Your Rent Link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am able to see Your Home Text",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 25400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateSteps.iClickOnYourHomeLink()"
});
formatter.result({
  "duration": 10077125300,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-C1H7GVRS\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\shrad\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52964}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: befc9be057024cea94ef20544eb4e934\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat org.uk.wcht.utility.Utility.clickOnElement(Utility.java:37)\r\n\tat org.uk.wcht.pages.HomePage.clickOnYourHomeLink(HomePage.java:34)\r\n\tat org.uk.wcht.cucumber.stepdefs.NavigateSteps.iClickOnYourHomeLink(NavigateSteps.java:19)\r\n\tat ✽.When I click on Your Home Link(src/test/java/org/uk/wcht/resources/featurefile/navigation.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NavigateSteps.iClickOnPayYourRentLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigateSteps.iAmAbleToSeeYourHomeText()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1217334600,
  "status": "passed"
});
formatter.before({
  "duration": 126861694900,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: Unable to receive message from renderer\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-C1H7GVRS\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\shrad\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53033}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fdfcb76706ceb7e3d5f46f64b20d0d5e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.uk.wcht.cucumber.Hooks.openBrowser(Hooks.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify User Able to See Ways to Exchange Your Home Text",
  "description": "",
  "id": "navigation-feature;verify-user-able-to-see-ways-to-exchange-your-home-text",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Find A Home Link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Exchange Your Home Link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I am able to see Exchange Your Home Text",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTheHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigateSteps.iClickOnFindAHomeLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigateSteps.iClickOnExchangeYourHomeLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NavigateSteps.iAmAbleToSeeExchangeYourHomeText()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 17136119700,
  "status": "passed"
});
});