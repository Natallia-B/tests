Feature: Example feature
  As a user of PI
  I want to be able to navigate to dashboard.

  Background:
    Given Log in to Dashboard
  
  Scenario: Navigate to the sample page
    Given The side-bar menu is expanded
    When I navigate to 'Research'
    When I navigate to 'Sample'
    
    Then I am on the Sample page