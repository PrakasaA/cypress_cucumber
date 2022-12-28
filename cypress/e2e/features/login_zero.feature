Feature: search box

    Scenario: succes searchbox
        Given user open website Zero Bank
        When user input on searchbox "money"
        Then user get Search Result page
         