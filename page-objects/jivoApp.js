module.exports = {
  url: 'https://app.jivosite.com',
  elements: {
    //registration page
    emailInput:'[data-qa-id="signup-account-email-input"]',
    passwordInput:'[data-qa-id="signup-account-password-input"]',
    registerButton:'div[class*="regAccount"] span.link',
    eulaButton:'[data-qa-id="signup-eula-agree"] label[for]',
    registrationContinueButton:'[data-qa-id="signup-account-next"]',
    //setup-wizard
    wizardNameInput:'input[data-qa-id="signup-widget-agent-name-input"]',
    wizardDescriptionInput:'[data-qa-id="signup-account-agent-title-input"]',
    wizardNextButton:'[data-qa-id="signup-wizard-next"]',
    wizardUrlInput: '[data-qa-id="signup-account-site-url-input"]',
    wizardPhoneInput: '[data-qa-id="signup-account-phone-input"]',
    wizardDownloadLaterButton: '[data-qa-id="signup-download-later"]',
    wizardCompleteButton: '[data-qa-id="signup-wizard-start"]'
  },
  commands: [{
    enterEmailAndPass(email, password) {
      return this
        .setValue('@emailInput', email)
        .setValue('@passwordInput', password); 
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