Feature: On About Page

  Background:
    Given System loads About Page data
    And I visit "About" Page

  @core
  Scenario: I see the page title
    Then I see "about" in the page

  @core
  Scenario: See author details
    Then I see "gabriel" in the page
    And I see "romay.gabriel@gmail.com" in the page

  # TODO: Scenario: Click image and get redirected to testUrl
  # TODO: Scenario: Click "gabriel" name and get redirected to testUrl
