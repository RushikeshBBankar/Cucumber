var { Given, When, Then, Before, BeforeAll, After, AfterAll} = require('cucumber');

Before(()=>{
        console.log("-------------------Inside a before Block-------------------")
})

BeforeAll(()=>{
        console.log("-------------------Inside a before All Block-------------------")
})
After(()=>{
        console.log("-------------------Inside a After Block-------------------")
})
AfterAll(()=>{
        console.log("-------------------Inside a After All Block-------------------")
})

Given(/^user navigate to facebook website$/, function () {

        return console.log("@Given ---user navigate to facebook website ");
});

When(/^user validates the home title$/, function () {
        return console.log("@Then ---user user validates the home title");
       // return 'pending';
});

Then(/^user entered "([^"]*)" username$/, function (username) {
        return console.log("@Then ---user entered "+username+" username");
});

Then(/^user entered "([^"]*)" password$/, function (password) {
        return console.log("@Then ---user entered "+password+" password");
});


Then(/^user should "([^"]*)" successfully logged in$/, function (logInType) {
        return console.log("@Then ---user should "+logInType+" successfully logged in");
});