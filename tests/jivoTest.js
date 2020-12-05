module.exports = {
 
  'Case 1: Check if user can register and login'(browser) {

    const jivo = browser.page.jivoApp();
    //test case data all should be correct
    var email = 'tetetets2234t@mail.com'; 
    var password = 'hehePassW3ord!!'; 
    var name = 'MochitoAgent';
    var description = 'Always drinking Mochito';
    var url = 'website.test.com/test';
    var phone = '+79999995511';
    
    jivo
      .navigate()
      .waitForElementVisible('@loginButton', 6000, 'Step 1: Open app page')
      .click('@registerButton')
      .pause(3000)
      .registrationEmailAndPass(email,password) //enters email and password
      .click('@registrationEulaButton')
      .click('@registrationContinueButton')
      .waitForElementVisible('@wizardNameInput', 10000, 'Step 2: Enter correct login and password and continue registration')
      .wizardEnterAgentInfo(name,description)
      .click('@wizardNextButton')
      .click('@wizardNextButton')
      .wizardEnterAgentContacts(url,phone)
      .click('@wizardNextButton')
      .click('@wizardDownloadLaterButton')
      .click('@wizardCompleteButton')
      .waitForElementVisible('div[class*="container___"]', 10000, 'Step 3: Complete setup-wizard')
      //sql-command example to check?
      .end();
  },
  'Case 2: Check if user can login with correct data'(browser) {

    const jivo = browser.page.jivoApp();
    //user has to be registred
    var email = 'oooooo1111@mail.ru';
    var password = '223791aaA';

    jivo
      .navigate()
      .waitForElementVisible('@loginButton', 6000, 'Step 1: Open app page')
      .loginEmailAndPass(email, password)
      .click('@loginButton')
      .pause(5000)
      .waitForElementVisible('[data-qa-id="side-menu-item-settings"]', 6000, 'Step 2: Enter correct data and login')
      .end();
  },
  'Case 3: Check if user cant login with incorrect data'(browser) {

    const jivo = browser.page.jivoApp();
    //user has to be NOT registred
    var email = 'badcreds1111@mail.ru';
    var password = 'wrongPassword!!';

    jivo
      .navigate()
      .waitForElementVisible('@loginButton', 6000, 'Step 1: Open app page')
      .loginEmailAndPass(email, password)
      .click('@loginButton')
      .pause(5000)
      .waitForElementVisible('[data-qa-id="login-error-message"]', 6000, 'Step 2: Enter incorrect data and login')
      .saveScreenshot('tests_output/loginError.png')
      .end();
  }
};