const HomePage = require('../../pageobjects/home.page');
const ContactUs = require('../../pageobjects/contactUs.page');
const createAccountFormPage = require('../../pageobjects/createAccountForm.page');
const signInPage = require('../../pageobjects/signIn.page');
const myAccountPage = require('../../pageobjects/myAccount.page');
const checkoutPage = require('../../pageobjects/checkout.page');

describe('My Login application', () => {

    beforeEach(() =>{
        HomePage.openWebSite();
    })


    it('should create a new account', () =>  {
        HomePage.goToContactSignInPage();
        signInPage.createAccount("interviewtestemail8@gmail.com")
        createAccountFormPage.enterPersonalInformation('Mr.', "beck","ars","asdfasdf",4,4,2021)
        createAccountFormPage.enterAddressInformation()
        browser.pause(2000)
        expect(browser).toHaveUrl('http://automationpractice.com/index.php?controller=my-account')
        expect(browser).toHaveTitle('My account - My Store')
        
    });

    it('should contact with customer service', () =>  {
        HomePage.goToContactUsPage();
        ContactUs.sendMessage("this is a test message", "interviewtestemail@gmail.com")
        expect(ContactUs.confirmationMessage).toHaveText("Your message has been successfully sent to our team.");
    });

    it('should purhcase a blouse', () =>  {

        HomePage.addBlouseToCart();
        checkoutPage.summary()
        // checkoutPage.signIn("interviewtestemail3@gmail.com","asdfasdf")
        checkoutPage.address()
        checkoutPage.shipping()
        checkoutPage.payment()

        expect(checkoutPage.confirmationMessage).toBeDisplayed()
        expect(checkoutPage.confirmationMessage).toHaveTextContaining('Your order on My Store is complete.')
    });
});


