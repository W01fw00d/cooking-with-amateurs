Feature: On About Page

  @core
  Scenario: I see the page title
    Given System loads About Page only
    And I visit "About" Page
    Then I see "about" in the page

  @core
  Scenario: See author details
    Given System loads About Page only
    And I visit "About" Page
    Then I see "gabriel" in the page
    And I see "romay.gabriel@gmail.com" in the page

  Scenario: Go back to Home Page
    Given System loads About and List Page
    And I visit "About" Page
    Then I see "about" in the page
    When I click on the "back" Button
    Then I am redirected to "List" Page
    And I see "Fideuà" in the page
