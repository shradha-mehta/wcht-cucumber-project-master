package org.uk.wcht.pages;

/*
Created by Pradip
*/

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.uk.wcht.utility.Utility;

public class LoginPage extends Utility {
    //Log the webelements and methods into Log4j reports

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//Using selenium @FindBy and initElement methods
// using _ help separate from variable

    @FindBy(xpath = "//h3[@class='panel-title']")
    WebElement _panelTitle;

    public String getLogin_RegisterText() {
        Reporter.addStepLog("Displaying Login / Register Text  :" + getTextFromElement(_panelTitle) + " " + _panelTitle.toString() + "<br>");
        log.info("Displaying Login / Register Text :" + getTextFromElement(_panelTitle) + " " + _panelTitle.toString());
        return getTextFromElement(_panelTitle);
    }

    @FindBy(id = "username")
    WebElement _username;

    public void enterUserName(String username) {
        Reporter.addStepLog("Entering username  : " + username + " on Username Field " + _username.toString());
        sendTextToElement(_username, username);
        log.info("Entering username  : " + username + " on Username Field " + _username.toString());
    }

    @FindBy(id = "password")
    WebElement _password;

    public void enterPassword(String password) {
        Reporter.addStepLog("Entering password  : " + password + " on Password Field " + _password.toString());
        sendTextToElement(_password, password);
        log.info("Confirming email  : " + password + " on Password Field " + _password.toString());
    }

    @FindBy(id = "submit")
    WebElement _loginSubmitBtn;

    public void clickOnLogInButton() {
        Reporter.addStepLog("Clicking on Log in Button : " + _loginSubmitBtn.toString() + "<br>");
        clickOnElement(_loginSubmitBtn);
        log.info("Clicking on Log in Buttton : " + _loginSubmitBtn.toString());
    }

    @FindBy(xpath = "//div[@class='alert alert-error']")
    WebElement _loginErrorMessage;

    public String getLoginErrorMessage() {
        Reporter.addStepLog("Displaying Login Error Alert Message " + _loginErrorMessage.toString());
        log.info("Displaying Login Error Alert Message " + _loginErrorMessage.toString());
        return getTextFromElement(_loginErrorMessage);
    }

}

