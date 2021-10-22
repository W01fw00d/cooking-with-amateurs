Feature: On Not Found Page

  Background:
    Given I visit "Fake" Page

  @core
  Scenario: See "Not Found" message
    Then I see "notFound" in the page

  Scenario: Go back to Home Page
    When I click on the "back" Button
    Then I am redirected to "List" Page
    # TODO: setStub for List Page, so it's not displayed blank, and check
    # Then I see "Fideuà" in the page
