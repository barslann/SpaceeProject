const Page = require("./page");

class CreateAccountForm extends Page{
    get mrTitleField(){
        return $('#uniform-id_gender1')
    }

    get mrsTitleField(){
        return $('#uniform-id_gender2')
    }

    get customerFirstNameField(){
        return $('#customer_firstname')
    }

    get customerLastNameField(){
        return $('#customer_lastname')
    }

    get passwordField(){
        return $('#passwd')
    }

    get dateOfBirthDay(){
        return $('#days')
    }

    get dateOfBirthMonth(){
        return $('#months')
    }

    get dateOfBirthYear(){
        return $('#years')
    }

    get addressFirstNameField(){
        return $('#firstname')
    }
    get addressLastNameField(){
        return $('#lastname')
    }
    get addressCompanyField(){
        return $('#company')
    }

    get addressField(){
        return $('#address1')
    }

    get addressCityField(){
        return $('#city')
    }

    get addressStateField(){
        return $('#id_state')
    }

    id_state
    get addressZipCodeField(){
        return $('#postcode')
    }

    get addressCountryField(){
        return $('#id_country')
    }

    get addressPhoneNumberField(){
        return $('#phone_mobile')
    }

    get addressAliasField(){
        return $('#alias')
    }

    get addressSubmitField(){
        return $('#submitAccount')
    }



    enterPersonalInformation(title,firstName,lastName,password, day, month, year){
        
        if(title === 'Mr.' ){
            this.mrTitleField.click()
        }else if(title === 'Mrs.' ){
            this.mrsTitleField.click();
        }

        this.customerFirstNameField.setValue(firstName)
        this.customerLastNameField.setValue(lastName)
        this.passwordField.setValue(password)
        this.dateOfBirthDay.selectByAttribute('value', '4');
        this.dateOfBirthMonth.selectByAttribute('value', '4');
        this.dateOfBirthYear.selectByAttribute('value', '2020');
        browser.pause(3000)

    }

    enterAddressInformation(firstname,lastname,company, address,city,state,zipCode,phoneNumber,alias){
        this.addressFirstNameField.setValue("beck")
        this.addressLastNameField.setValue("ars")
        this.addressCompanyField.setValue("spacee")
        this.addressField.setValue("3752 Arapaho Road")
        this.addressCityField.setValue("Addison")
        this.addressStateField.selectByVisibleText('Texas');
        this.addressZipCodeField.setValue("75001")
        this.addressPhoneNumberField.setValue("1234567898")
        this.addressAliasField.setValue("MyAddress")
        this.addressSubmitField.click()
    }





}

module.exports = new CreateAccountForm();