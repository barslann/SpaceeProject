const Page = require("./page");

class Checkout extends Page{
    get proceedToCheckoutButton(){
        return $("//p//a[@title='Proceed to checkout']")
    }

    get totalPriceLabel(){
        return $('#total_price_container')
    }

    get emailField(){
        return $('#email')
    }

    get passwordField(){
        return $('#passwd')
    }

    get submitLoginButton(){
        return $('#SubmitLogin')
    }

    get addressSectionProceedToCheckOutButton(){
        return $("//button[@name='processAddress']")
    }

    get termsOfServiceCheckBox(){
        return $('#cgv')
    }

    get shipppingSectionProceedToCheckOutButton(){
        return $("//button[@name='processCarrier']")
    }

    get payByBankWireButton(){
        return $("//p//a[@title='Pay by bank wire']")
        
    }
    get confirmMyOrderButton(){
        return $("//p//button[@type='submit']")
    }

    get confirmationMessage(){
        return $('.cheque-indent')
    }
    

    summary(){
        this.proceedToCheckoutButton.click()
        browser.pause(2000)
    }

    signIn(email,password){
        this.emailField.setValue(email)
        this.passwordField.setValue(password)
        this.submitLoginButton.click();
        browser.pause(2000)
    }

    address(){
        this.addressSectionProceedToCheckOutButton.click()
        browser.pause(2000)
    }

    shipping(){
        this.termsOfServiceCheckBox.click()
        this.shipppingSectionProceedToCheckOutButton.click()
        browser.pause(2000)
    }

    payment(){
        this.payByBankWireButton.click()
        browser.pause(3000)
        this.confirmMyOrderButton.click()
        browser.pause(3000)
    }




}

module.exports = new Checkout();