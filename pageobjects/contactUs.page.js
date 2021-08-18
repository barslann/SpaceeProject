
class ContactUs{

    get subjectBox(){
        return $('#id_contact');
    }

    get emailField(){
        return $('#email');
    }

    get messageArea(){
        return $('#message')
    }

    get sendButton(){
        return $("//span[contains(text(),'Send')]")
    }

    get confirmationMessage(){
        return $("//p[@class='alert alert-success']")
    }


    sendMessage(message,email){
        this.subjectBox.selectByIndex(2)
        this.emailField.setValue(email)
        this.messageArea.setValue(message)
        this.sendButton.click();
    }

    getConfirmationMessage(){
        this.confirmationMessage.getText();
    }

}

module.exports = new ContactUs();