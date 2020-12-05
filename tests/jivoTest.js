module.exports = {
  'Check if user can register and login'(browser) {

    const emailInput = '[data-qa-id="signup-account-email-input"]';
    const passwordInput = '[data-qa-id="signup-account-password-input"]';
    browser
      .url('https://app.jivosite.com')
      .waitForElementVisible('button[data-qa-id="login-submit-button"]', 6000, 'Step 1: Open app page')
      .click('div[class*="regAccount"] span.link')
      .pause(3000)
      .setValue(emailInput, 'jf33ji5111154j2@mail.com')
      .setValue(passwordInput, '223791aaA!!')
      .click('[data-qa-id="signup-eula-agree"] label[for]')
      .click('[data-qa-id="signup-account-next"]')
      .waitForElementVisible('input[data-qa-id="signup-widget-agent-name-input"]', 10000, 'Step 2: Enter correct login and password and continue registration')
      .setValue('[data-qa-id="signup-widget-agent-name-input"]', 'Testing Name')
      .setValue('[data-qa-id="signup-account-agent-title-input"]', 'Testing Description')
      .click('[data-qa-id="signup-wizard-next"]')
      .click('[data-qa-id="signup-wizard-next"]')
      .setValue('[data-qa-id="signup-account-site-url-input"]', 'website.com/testing')
      .setValue('[data-qa-id="signup-account-phone-input"]', '+79999999999')
      .click('[data-qa-id="signup-wizard-next"]')
      .click('[data-qa-id="signup-download-later"]')
      .click('[data-qa-id="signup-wizard-start"]')
      .waitForElementVisible('div[class*="container___"]', 10000, 'Step 3: Complete setup-wizard');
  }
};