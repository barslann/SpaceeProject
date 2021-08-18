const Page = require("./page");

class SignInPage extends Page{

    get emailField(){
        return $('#email_create')
    }
    
    get createButton(){
        return $('#SubmitCreate')
    }

    createAccount(email){
        this.emailField.waitForExist({ timeout: 5000 })
        this.emailField.setValue(email)
        this.createButton.click();
    }
}

module.exports = new SignInPage();