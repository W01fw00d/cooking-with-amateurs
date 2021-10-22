Feature: On Not Found Page

  Background:
    Given I visit "Fake" Page

  @core
  Scenario: See "Not Found" message
    Then I see "notFound" in the page

  Scenario: Go back to Home Page
    When I click on the "back" Button
    Then I am redirected to "List" Page
