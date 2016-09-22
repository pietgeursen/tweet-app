Feature: View tweets

  @watch
  Scenario: I want to see all the people
    Given I am viewing the page at "/"
    Then I can see the h1 "Tweet App: Avalanche"
    When I enter "cheese" into the "Enter keyword" input
    And I click on the input with value "Get Tweets"
    Then I am redirected to the "/tweets/all" page