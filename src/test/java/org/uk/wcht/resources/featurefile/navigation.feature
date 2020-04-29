Feature: Navigation feature

  As a user I want to navigate to pages on WCHT.ORG.UK

  Scenario: Verify User Able to See Ways to Your Home Page
    Given I am on the Home Page
    When I click on Your Home Link
    And I click on Pay Your Rent Link
    Then I am able to see Your Home Text

  Scenario: Verify User Able to See Ways to Exchange Your Home Text
    Given I am on the Home Page
    When I click on Find A Home Link
    And I click on Exchange Your Home Link
    Then I am able to see Exchange Your Home Text