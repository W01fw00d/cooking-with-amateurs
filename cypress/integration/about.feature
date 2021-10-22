Feature: On About Page

  Background:
    Given I visit "About" Page

  @core
  Scenario: I see the page title
    Then I see "about" in the page

  @core
  Scenario: See author details
    Then I see "gabriel" in the page
    Then I see "romay.gabriel@gmail.com" in the page

  Scenario: Go back to Home Page
    When I click on the "back" Button
    Then I am redirected to "List" Page
    # TODO: setStub for List Page, so it's not displayed blank, and check
    # Then I see "Fideuà" in the page
