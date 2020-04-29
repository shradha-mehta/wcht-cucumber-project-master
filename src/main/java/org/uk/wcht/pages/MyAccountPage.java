package org.uk.wcht.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.uk.wcht.utility.Utility;

public class MyAccountPage extends Utility {

    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(MyAccountPage.class.getName());

//Using selenium @FindBy and initElement methods
// using _ help separate from variable

//    By myAccountText = By.xpath("//div[@class='panel-heading']");
//    By registerLink = By.partialLinkText("Regist");

    @FindBy(xpath = "//div[@class='panel-heading']")
    WebElement _myAccountText;

    @FindBy(partialLinkText = "Regist")
    WebElement _registerLink;

    @FindBy(xpath = "//div[@id='home']//div[1]//a[1]//img[1]")
    WebElement _yourAccountLink;

    @FindBy(xpath="//a[contains(text(),'Log In')]")
    WebElement _loginTab;

    public void clickOnYourAccountLink() {
        Reporter.addStepLog("Clicking on Your Account  Link :" + _yourAccountLink.toString());
        clickOnElement(_yourAccountLink);
        log.info("Clicking on Your Account Link :" + _yourAccountLink.toString());
    }


    public void clickOnYourLoginTab() {
        Reporter.addStepLog("Clicking on Login Tab :" + _loginTab.toString());
        clickOnElement(_loginTab);
        log.info("Clicking on Login Tab :" + _loginTab.toString());
    }

    public void verifyMyAccountText() {
        Reporter.addStepLog("Displaying My Account Text :" + _myAccountText.toString() + "<br>");
        verifyThatTextIsDisplayed(_myAccountText, " My Account ");
        log.info("Displaying My Account Text :" + _myAccountText.toString());
    }

    public String getMyAccountText() {
        Reporter.addStepLog("Displaying My Account Text  :" +getTextFromElement(_myAccountText)+" "+ _myAccountText.toString() + "<br>");
        log.info("Displaying My Account Text :" +getTextFromElement(_myAccountText)+" "+ _myAccountText.toString());
        return getTextFromElement(_myAccountText);
    }

    public void clickOnRegisterLink() {
        Reporter.addStepLog("Clicking on Register Link :" + _registerLink.toString() + "<br>");
        clickOnElement(_registerLink);
        log.info("Clicking on Register Link :" + _registerLink.toString());
    }

}