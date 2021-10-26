Feature: On Not Found Page

  @core
  Scenario: See "Not Found" message
    Given System loads Not Found Page only
    And I visit "Fake" Page
    Then I see "notFound" in the page

  Scenario: Go back to Home Page
    Given System loads Not Found and List Page
    And I visit "Fake" Page
    Then I see "notFound" in the page
    When I click on the "back" Button
    Then I am redirected to "List" Page
    And I see "Fideuà" in the page
