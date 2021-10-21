Feature: On About Page
  
  #@focus
  @core
  Scenario: See author details
    Given I visit "About" Page
    Then I see "gabriel" in the page
    Then I see "romay.gabriel@gmail.com" in the page

  Scenario: Go back to Home Page
    Given I visit "About" Page
    When I click on the "back" Button
    Then I am redirected to "List" Page
