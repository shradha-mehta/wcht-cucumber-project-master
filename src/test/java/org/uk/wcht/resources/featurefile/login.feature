Feature: Login Feature

  As a User I want to Login to WCHT Website

  Background: I am on the Home Page

  Scenario: Verify User can navigate to Login Page
    Given I am on the Home Page
    When I click on the Account link
    And I click on the Login Link
    Then I can see the Login Register Page

  Scenario: Verify User in Not Able to Login With Invalid credentials
    Given I am on Login Page
    When I enter username "<username>" and password "<password>"
    And I click on Login Submit Button
    Then System to display Login Error Message
