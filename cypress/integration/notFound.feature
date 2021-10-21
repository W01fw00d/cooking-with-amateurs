Feature: On Not Found Page

  # Move it to list.feature
  @core
  Scenario: Be redirected to List page from root
    Given I visit "" Page
    Then I am redirected to "List" Page

  @core
  Scenario: See "Not Found" message
    Given I visit "Fake" Page
    Then I see "notFound" in the page

  Scenario: Go back to Home Page
    Given I visit "Fake" Page
    When I click on the "Back" Button
    Then I am redirected to "List" Page
