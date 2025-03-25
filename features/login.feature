Feature: Login functionality

  Scenario: User logs in with valid credentials
    Given I visit the login page
    And I accept the cookie consent
    When I enter my login credentials
    Then I should be logged in successfully
