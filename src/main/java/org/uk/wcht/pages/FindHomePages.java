package org.uk.wcht.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.uk.wcht.utility.Utility;


public class FindHomePages extends Utility {
   //Log the webelements and methods into Log4j reports

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//Using selenium @FindBy and initElement methods
// using _ help separate from variable


    @FindBy(xpath = "//p[contains(text(),'Swapping homes using the mutual exchange service i')]")
    WebElement _exchangeYourHomeLink;

    @FindBy(xpath="//h1[@class='inner-banner__title']")
    WebElement _exchangeHomeBannerText;

    public void clickExchangeAHomeLink() {
        Reporter.addStepLog("Clicking on Exchange Your Home Link :" + _exchangeYourHomeLink.toString() + "<br>");
        mouseHoverToElementAndClick(_exchangeYourHomeLink);
        log.info("Clicking on Exchange Your  Home Link :" + _exchangeYourHomeLink.toString());
    }

    public String getExchangeYourHomeText() {
        Reporter.addStepLog("Displaying Exchange Your Home Text  :" + getTextFromElement(_exchangeHomeBannerText) + " " + _exchangeHomeBannerText.toString());
        log.info("Displaying Exchange Your Home Text  :" + getTextFromElement(_exchangeHomeBannerText) + " " + _exchangeHomeBannerText.toString());
        return getTextFromElement(_exchangeHomeBannerText);
    }
}
