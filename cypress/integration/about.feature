Feature: On About Page

  I want to see author details
  
  @focus
  Scenario: Seeing name and email
    Given I visit About Page
    Then I see "gabriel" in the page
    Then I see "romay.gabriel@gmail.com" in the page
