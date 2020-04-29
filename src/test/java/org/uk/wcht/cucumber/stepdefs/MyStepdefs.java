package org.uk.wcht.cucumber.stepdefs;/*
Created by Pradip
*/

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.uk.wcht.pages.HomePage;
import org.uk.wcht.pages.LoginPage;
import org.uk.wcht.pages.MyAccountPage;

import static org.uk.wcht.utility.Utility.getRandomInt;
import static org.uk.wcht.utility.Utility.getRandomString;

public class MyStepdefs {
    @Given("^I am on the Home Page$")
    public void iAmOnTheHomePage() {
    }

    @When("^I click on the Account link$")
    public void iClickOnTheAccountLink() {
        new HomePage().clickOnYourAccountLink();
    }

    @And("^I click on the Login Link$")
    public void iClickOnTheLoginLink() {
        new MyAccountPage().clickOnYourLoginTab();
    }

    @Then("^I can see the Login Register Page$")
    public void iCanSeeTheLoginRegisterPage() {
        Assert.assertEquals(new LoginPage().getLogin_RegisterText(), "Login / Register");

    }

    @Given("^I am on Login Page$")
    public void iAmOnLoginPage() {
        new HomePage().clickOnYourAccountLink();
        new MyAccountPage().clickOnYourLoginTab();
    }

    @When("^I enter username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void iEnterUsernameAndPassword(String username, String password) {
        new LoginPage().enterUserName(username = getRandomInt(8));
        new LoginPage().enterPassword(password = getRandomString(7));
    }

    @And("^I click on Login Submit Button$")
    public void iClickOnLoginSubmitButton() {
        new LoginPage().clickOnLogInButton();
    }

    @Then("^System to display Login Error Message$")
    public void systemToDisplayLoginErrorMessage() {
        Assert.assertEquals(new LoginPage().getLoginErrorMessage(), "Oops! Those log in details arent correct. Please try again.");
    }

}
