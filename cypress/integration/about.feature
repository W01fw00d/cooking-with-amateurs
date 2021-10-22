Feature: On About Page

  Background:
    Given I visit "About" Page

  @core
  Scenario: See author details
    Then I see "gabriel" in the page
    Then I see "romay.gabriel@gmail.com" in the page

  Scenario: Go back to Home Page
    When I click on the "back" Button
    Then I am redirected to "List" Page
