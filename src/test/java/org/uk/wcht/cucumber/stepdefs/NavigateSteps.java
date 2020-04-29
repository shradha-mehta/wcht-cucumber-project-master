package org.uk.wcht.cucumber.stepdefs;

/*
Created by Pradip
*/

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import org.uk.wcht.pages.FindHomePages;
import org.uk.wcht.pages.HomePage;
import org.uk.wcht.pages.YourHomePage;

public class NavigateSteps {
    @When("^I click on Your Home Link$")
    public void iClickOnYourHomeLink() {
        new HomePage().clickOnYourHomeLink();
    }

    @And("^I click on Pay Your Rent Link$")
    public void iClickOnPayYourRentLink() {
        new YourHomePage().clickOnPayYourRentLink();
    }

    @Then("^I am able to see Your Home Text$")
    public void iAmAbleToSeeYourHomeText() {
        Assert.assertEquals(new YourHomePage().getYourHomeText(),("Your home"));
    }

    @When("^I click on Find A Home Link$")
    public void iClickOnFindAHomeLink() {
        new HomePage().clickOnFindAHomeLink();
            }

    @And("^I click on Exchange Your Home Link$")
    public void iClickOnExchangeYourHomeLink() {
        new FindHomePages().clickExchangeAHomeLink();
    }

    @Then("^I am able to see Exchange Your Home Text$")
    public void iAmAbleToSeeExchangeYourHomeText() {
        Assert.assertEquals(new FindHomePages().getExchangeYourHomeText(), "Exchange your home");
    }
}
