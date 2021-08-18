const Page = require("./page");

class MyAccount extends Page{
    get myAccountPageHeader(){
        return $('.page-heading=My account')
    }
}

module.exports = new MyAccount();