Feature: On Detail Page

  @core
  Scenario: Change to Steps Tab without steps and then back to Image Tab
    Given System loads Detail Page data without steps
    And I visit "detail/1" Page
    Then I see "Gnocchi" in the page
    And I do not see "No steps" in the page
    When I click on the "Steps" Text
    Then I see "No steps" in the page
    When I click on the "Image" Text
    Then I do not see "No steps" in the page

  @core
  Scenario: Check all steps causes that Section to be closed
    Given System loads Detail Page data
    And I visit "detail/1" Page
    When I click on the "Steps" Text
    And I click on the "Step 1" Text
    And I click on the "Step 2" Text
    And I click on the "Step 3" Text
    Then I do not see "Step 1" in the page
    When I click on the "Section A" Text
    Then I see "Step 1" in the page

  Scenario: Close steps section and open it
    Given System loads Detail Page data
    And I visit "detail/1" Page
    When I click on the "Steps" Text
    Then I see "Step 1" in the page
    When I click on the "Section A" Text
    Then I do not see "Step 1" in the page
    When I click on the "Section A" Text
    Then I see "Step 1" in the page
