module.exports = {
  /*'Case 1: Check if user can register and login'(browser) {

    const jivo = browser.page.jivoApp();
    
    jivo
      .navigate()
      .waitForElementVisible('@loginButton', 6000, 'Step 1: Open app page')
      .click('@registerButton')
      .pause(3000)
      .registrationEmailAndPass('tetetets34t@mail.com', 'password!!AA123')//pass correct email and password in parametrs
      .click('@registrationEulaButton')
      .click('@registrationContinueButton')
      .waitForElementVisible('@wizardNameInput', 10000, 'Step 2: Enter correct login and password and continue registration')
      .wizardEnterAgentInfo('MochitoAgent','Always drinking Mochito')//pass name of agent and description in parametrs
      .click('@wizardNextButton')
      .click('@wizardNextButton')
      .wizardEnterAgentContacts('website.test.com/test', '+79999995511') //pass url and phone in parametrs
      .click('@wizardNextButton')
      .click('@wizardDownloadLaterButton')
      .click('@wizardCompleteButton')
      .waitForElementVisible('div[class*="container___"]', 10000, 'Step 3: Complete setup-wizard')
      //sql-command example to check?
      .end();
  },*/
  'Case 2: Check if user can login with correct credits'(browser) {

    const jivo = browser.page.jivoApp();

    jivo
      .navigate()
      .waitForElementVisible('@loginButton', 6000, 'Step 1: Open app page')
      .loginEmailAndPass('oooooo1111@mail.ru', '223791aaA')
      .click('@loginButton')
      .pause(5000)
      .waitForElementVisible('[data-qa-id="side-menu-item-settings"]', 6000, 'Step 2: Enter correct data and login');
  }
};