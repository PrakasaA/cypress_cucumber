Feature: sign in

    Scenario: user sign in to zero bank website
        Given user open website zeroBank
        When user submit sign in button
        Then user open login.html page

        When user submit login "username"
        When user submit password "password"
        When user click sign in button
        Then user get to index.html page