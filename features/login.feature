Feature: Login
        In order to preform successful Login
        As a user
        I want to enter correct username and password

        Scenario: In order to verify login to facebook
                Given user navigate to facebook website
                When user validates the home title
                Then user entered "valid" username
                Then user entered "valid" password
                Then user should "be" successfully logged in
        
         Scenario: In order to verify login to facebook as invalid user
                Given user navigate to facebook website
                When user validates the home title
                Then user entered "invalid" username
                Then user entered "invalid" password
                Then user should "not" successfully logged in