const Page = require("./page");

class HomePage extends Page{

    openWebSite(){
        super.open('automationpractice.com/');
        browser.maximizeWindow()
    }

    get contactUsLink(){
        return $('=Contact us');
    }

    get signInButton(){
        return $('=Sign in')
    }

    get womenTab(){
        return $("//a[@title='Blouse']")
    }


    get blouseItem(){
        return $("//img[@title='Blouse']")
    }

    get addToCartButton(){
        return $("//button[@class='exclusive']")
    }

    get closeButton(){
        
        return $("//span[@class='cross']")
    }

    get gotoCartButton(){
        return $("//a[@title='View my shopping cart']")
    }

    

    goToContactUsPage(){
        this.contactUsLink.click();
    }

    goToContactSignInPage(){
        this.signInButton.click();
    }


    addBlouseToCart(){
        browser.pause(3000)
        this.womenTab.scrollIntoView();
        this.womenTab.click({x:30,y:30})
        browser.pause(4000)
        this.addToCartButton.click();
        browser.pause(2000)
        this.closeButton.click();
        browser.pause(2000)
        this.gotoCartButton.click();
        browser.pause(2000)
    }


}

module.exports = new HomePage();