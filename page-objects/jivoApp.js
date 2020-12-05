module.exports = {
  url: 'https://app.jivosite.com',
  elements: {
    //registration page
    registrationEmailInput:'[data-qa-id="signup-account-email-input"]',
    registrationPasswordInput:'[data-qa-id="signup-account-password-input"]',
    registerButton:'div[class*="regAccount"] span.link',
    registrationEulaButton:'[data-qa-id="signup-eula-agree"] label[for]',
    registrationContinueButton:'[data-qa-id="signup-account-next"]',
    //setup-wizard
    wizardNameInput:'input[data-qa-id="signup-widget-agent-name-input"]',
    wizardDescriptionInput:'[data-qa-id="signup-account-agent-title-input"]',
    wizardNextButton:'[data-qa-id="signup-wizard-next"]',
    wizardUrlInput: '[data-qa-id="signup-account-site-url-input"]',
    wizardPhoneInput: '[data-qa-id="signup-account-phone-input"]',
    wizardDownloadLaterButton: '[data-qa-id="signup-download-later"]',
    wizardCompleteButton: '[data-qa-id="signup-wizard-start"]',
    //login page
    loginEmailInput: '[data-qa-id="login-email-input"]',
    loginPasswordInput: '[data-qa-id="login-password-input"]',
    loginButton: '[data-qa-id="login-submit-button"]'
  },
  commands: [{
    loginEmailAndPass(email,password) {
      return this
        .setValue('@loginEmailInput', email)
        .setValue('@loginPasswordInput', password);
    },
    registrationEmailAndPass(email, password) {
      return this
        .setValue('@registrationEmailInput', email)
        .setValue('@registrationPasswordInput', password); 
    },
    wizardEnterAgentInfo(name, description){
      return this
        .setValue('@wizardNameInput', name)
        .setValue('@wizardDescriptionInput', description);
    },
    wizardEnterAgentContacts(url, phone){
      return this
        .setValue('@wizardUrlInput', url)
        .setValue('@wizardPhoneInput', phone);
    }
  }]
};