Feature: On Not Found Page

  @core
  Scenario: See "Not Found" message
    Given I will be visiting Not Found Page only
    Given I visit "Fake" Page
    Then I see "notFound" in the page

  Scenario: Go back to Home Page
    Given I will be visiting List Page too
    Given I visit "Fake" Page
    Then I see "notFound" in the page
    When I click on the "back" Button
    Then I am redirected to "List" Page
    Then I see "Fideuà" in the page
