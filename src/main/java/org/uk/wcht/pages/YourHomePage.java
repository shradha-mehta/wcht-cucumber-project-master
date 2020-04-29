package org.uk.wcht.pages;


import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.uk.wcht.utility.Utility;

public class YourHomePage extends Utility {

    //Log the webelements and methods into Log4j reports

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//Using selenium @FindBy and initElement methods
// using _ help separate from variable

    @FindBy(xpath = "//p[contains(text(),'You can pay your rent quickly and easily online. M')]")
    WebElement _payYourRentLink;

    public void clickOnPayYourRentLink() {
        Reporter.addStepLog("Clicking on Pay Your Rent Link : " + _payYourRentLink.toString() + "<br>");
        mouseHoverToElementAndClick(_payYourRentLink);
        log.info("Clicking on Pay Your Rent Link  : " + _payYourRentLink.toString());
    }
    @FindBy(xpath = "//h1[contains(text(),'Your home')]")
    WebElement _yourHomeText;

    public String getYourHomeText() {
        Reporter.addStepLog("Displaying Your Home Text  :" + getTextFromElement(_yourHomeText) + " " + _yourHomeText.toString());
        log.info("Displaying Your Home Text  :" + getTextFromElement(_yourHomeText) + " " + _yourHomeText.toString());
        return getTextFromElement(_yourHomeText);
    }
}