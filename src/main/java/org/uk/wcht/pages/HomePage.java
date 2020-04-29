package org.uk.wcht.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.uk.wcht.utility.Utility;

public class HomePage extends Utility {

    //Log the webelements and methods into Log4j reports

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//Using selenium @FindBy and initElement methods
// using _ help separate from variable

    @FindBy(xpath = "//button[@class=\"modal__close js-modal-close\"]")
    WebElement _closeAlertBtn;

    @FindBy(linkText = "Your home")
    WebElement _yourHomeLink;

    @FindBy(xpath = "//span[contains(text(),'Your account')]")
    WebElement _yourAccountLink;

    @FindBy(xpath = "//a[@class='header__nav-area-title'][contains(text(),'Find a home')]")
    WebElement _findAHome;


    public void clickOnYourHomeLink() {
        Reporter.addStepLog("Clicking on Your Home Link :" + _yourAccountLink.toString() + "<br>");
        clickOnElement(_closeAlertBtn);
        clickOnElement(_yourHomeLink);
        log.info("Clicking on Your Home Link :" + _yourAccountLink.toString());
    }

    public void clickOnYourAccountLink() {
        Reporter.addStepLog("Clicking on Your Account Link :" + _yourAccountLink.toString() + "<br>");
        clickOnElement(_closeAlertBtn);
        clickOnElement(_yourAccountLink);
        log.info("Clicking on Your Account Link :" + _yourAccountLink.toString());
    }

    public void clickOnFindAHomeLink() {
        Reporter.addStepLog("Clicking on Find a Home Link :" + _findAHome.toString() + "<br>");
        clickOnElement(_closeAlertBtn);
        clickOnElement(_findAHome);
        log.info("Clicking on Your Account Link :" + _findAHome.toString());

    }
}
