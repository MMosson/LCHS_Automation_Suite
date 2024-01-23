
describe('Login and then logout', () => {
  it('Login with a pre-existing user account and then logout', () => {
    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');//CHANGED TO ENV A

    //This

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[name="bssUsername"]').type('testuser100523@cubic.com');
  
    cy.get('input[name="bssPassword"]').type('Password1');

    cy.get('button[type="Submit"]').click();

    cy.wait(2000);

    cy.contains("Account information")

    cy.wait(2000);

    cy.contains("Log in").click();

    cy.wait(1500);

    cy.contains("Sign in to your account");
  });
});

describe('Login and change password', () => {
  it('Login with a pre-existing user account and then change the password associated with the account', () => {
    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[name="bssUsername"]').type('testuser100523@cubic.com');
  
    cy.get('input[name="bssPassword"]').type('Password1');

    cy.get('button[type="Submit"]').click();

    cy.wait(2000);

    cy.contains("Account information");

    cy.contains("Change password").click();

    cy.wait(500);

    cy.get('Input[id="currentPassword__field"]').type("Password1");

    cy.get('Input[id="newPassword__field"]').type("Password1!");

    cy.get('Input[id="confirmNewPassword__field"]').type("Password1!");

    cy.contains("Save").click();
    
    cy.contains("Change password").click();

    cy.wait(500);

    cy.get('Input[id="currentPassword__field"]').type("Password1!");

    cy.get('Input[id="newPassword__field"]').type("Password1");

    cy.get('Input[id="confirmNewPassword__field"]').type("Password1");

    cy.contains("Save").click();

  });
});

describe('Login and change details', () => {
  it('Login with a pre-existing user account and then change the details at the top of the page', () => {
    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[name="bssUsername"]').type('testuser100523@cubic.com');
  
    cy.get('input[name="bssPassword"]').type('Password1');

    cy.get('button[type="Submit"]').click();

    cy.wait(2000);

    cy.contains("Account information")

    const currentDate = new Date().toISOString().replace(/[\-\.\:ZT]/g,"").substr(2,10);

    cy.get('Input[id="firstName__field"]').clear().type("Mike"+currentDate);

    cy.get('Input[id="lastName__field"]').clear().type("Mosson"+currentDate)

    cy.contains("Update").click();

    cy.wait(1000);

    cy.contains("Information updated");
  });
});


describe('Login and then change notification preferences', () => {
  it('Login with a pre-existing user account and change Notification Preferences', () => {
    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[name="bssUsername"]').type('testuser100523@cubic.com');
  
    cy.get('input[name="bssPassword"]').type('Password1');

    cy.get('button[type="Submit"]').click();

    cy.wait(2000);

    cy.contains("Account information")

    //use the eq modifier to get the 6th span which has this class
    cy.get('span[class="sc-cx1xxi-0 bOlEzG"]').eq(6).click();
    
    cy.wait(1000);

    //modify the preferences

    cy.get('Input[id="OFF"]').eq(0).click();
    cy.wait(200);
    cy.get('Input[id="OFF"]').eq(1).click();
    cy.wait(200);
    cy.get('Input[id="OFF"]').eq(2).click();
    cy.wait(200);
    cy.get('Input[type="checkbox"]').eq(0).click();
    cy.wait(200);
    cy.get('Input[type="checkbox"]').eq(1).click();
    cy.wait(200);
    cy.get('Input[type="checkbox"]').eq(2).click();
    cy.wait(500);
    cy.get('button[data-testid="DATA_TESTID_PREFERENCES_SUBMIT_BUTTON"]').click();

    //reset the preferences for the next test

    cy.wait(1500);
    cy.get('span[class="sc-cx1xxi-0 bOlEzG"]').eq(6).click();
    cy.wait(1500);


    cy.get('Input[id="EMAIL"]').eq(0).click();
    cy.wait(200);
    cy.get('Input[id="EMAIL"]').eq(1).click();
    cy.wait(200);
    cy.get('Input[id="EMAIL"]').eq(2).click();
    cy.wait(200);
    cy.get('Input[type="checkbox"]').eq(0).click();
    cy.wait(200);
    cy.get('Input[type="checkbox"]').eq(1).click();
    cy.wait(200);
    cy.get('Input[type="checkbox"]').eq(2).click();
    cy.wait(500);
    cy.get('button[data-testid="DATA_TESTID_PREFERENCES_SUBMIT_BUTTON"]').click();

  });
});

describe('Login and then change address', () => {
  it('Login with a pre-existing user account and change the user\'s address', () => {
    
    const currentDate = new Date().toISOString().replace(/[\-\.\:ZT]/g,"").substr(2,10);
    
    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })
    
    cy.get('input[name="bssUsername"]').type('testuser100523@cubic.com');
  
    cy.get('input[name="bssPassword"]').type('Password1');

    cy.get('button[type="Submit"]').click();

    cy.wait(2000);

    cy.contains("Account information");

   cy.contains("Update postal address").click();

   cy.wait(1000);

   cy.get('input[name="shipping.addressLine2"]').clear().type("Test Street "+currentDate);

   cy.get('input[name="shipping.city"]').clear().type("Test City "+currentDate);

   cy.get('input[name="shipping.region"]').clear().type("Testshire "+currentDate);

   cy.wait(2000);

   cy.get('button[data-testid="DATA_TESTID_ADDRESS_SUBMIT"]').click();

  });
});

describe('Login and then change the security question', () => {
  it('Login with a pre-existing user account and then logout', () => {
    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[name="bssUsername"]').type('testuser100523@cubic.com');
  
    cy.get('input[name="bssPassword"]').type('Password1');

    cy.get('button[type="Submit"]').click();

    cy.wait(2000);

    cy.contains("Account information");

    cy.wait(2000);

    cy.get('span[class="sc-cx1xxi-0 bOlEzG"]').eq(3).click();

    cy.wait(1000);

    cy.get('input[name="securityQuestion"]').click();

    cy.get('ul li:last').click();
    //cy.get('option').eq(5).click();
    cy.get('input[id="securityAnswer__field"]').clear().type("Fargo");

    cy.get('input[id="currentPassword__field"]').clear().type("Password1");

    cy.wait(2000);

    cy.contains("Save").click();

    cy.wait(1000);

    //this seems to be another way in which we can reference one of the lyft dropdown boxes from hell
    cy.get('span[class="sc-cx1xxi-0 bOlEzG"]').eq(3).click();

    cy.wait(1000);

    cy.get('input[name="securityQuestion"]').click();

    cy.get('div[class="sc-cx1xxi-0 elfRdE"]').eq(0).click();
    //cy.get('option').eq(5).click();
    cy.get('input[id="securityAnswer__field"]').clear().type("Mike");

    cy.get('input[id="currentPassword__field"]').clear().type("Password1");

    cy.wait(2000);

    cy.contains("Save").click();


  });
});

const getIframeDocument = () => {
  return cy
  .get('iframe[name="_cpashieldIFrame"]')
  // Cypress yields jQuery element, which has the real
  // DOM element under property "0".
  // From the real DOM iframe element we can get
  // the "document" element, it is stored in "contentDocument" property
  // Cypress "its" command can access deep properties using dot notation
  // https://on.cypress.io/its
  .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  // automatically retries until body is loaded
  .its('body').should('not.be.undefined')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  .then(cy.wrap)
}

describe('[VISA] Login and then successfully change payment method', () => {
  it('Login with a pre-existing user account and then change the payment card associated with the account', () => {

    const currentDate = new Date().toISOString().replace(/[\-\.\:ZT]/g,"").substr(2,10);

    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[name="bssUsername"]').type('testuser100523@cubic.com');
  
    cy.get('input[name="bssPassword"]').type('Password1');

    cy.get('button[type="Submit"]').click();

    cy.wait(2000);

    cy.contains("Account information")

    cy.get('span[class="sc-cx1xxi-0 bOlEzG"]').eq(7).click();

    cy.get('input[name="billing.country"]').click();

    //cy.get('ul li:first').click();
 
    cy.get('input[name="billing.addressLine1"]').clear().type("10");

    cy.get('input[name="billing.addressLine2"]').clear().type("Test Street "+currentDate);

    cy.get('input[name="billing.city"]').clear().type("City "+currentDate);
 
    cy.get('input[name="billing.region"]').clear().type("Testshire "+currentDate);

    cy.get('input[name="billing.postalCode"]').clear().type("SE100ES");

    cy.get('span[class="sc-cx1xxi-0 bOlEzG"]').click();

    //This is the area of contentious area!

    //getIframeBody().find('input[id="cardholderName"]').should('exist');
    cy.get('svg[class="core-ui-rtl-animation"]',{ timeout: 10000 }).should('be.visible'); //wait for loading spinner to appear
 
    cy.get('svg[class="core-ui-rtl-animation"]', { timeout: 10000 }).should('not.exist'); //wait for it to disappear
 
    cy.get('iframe[id="iFrameResizer1"]').then(($ifrom) =>{
      const doc = $ifrom.contents()
      cy.wrap(doc.find("#cardholderName")).type('MM Automation')
      cy.wrap(doc.find("#email")).clear().type('testuser100523@cubic.com')
      cy.wrap(doc.find("#ccNumber")).clear().type('4929400427277506')
      cy.wait(1000);

      cy.wrap(doc.find('#ccExpMonth')).select('12').should('have.value', '12')
      cy.wrap(doc.find('#ccExpYear')).select('28').should('have.value', '28')

      //Not working for click when wrapped in iFrame
      //cy.wrap(doc.find('#ccExpMonth')).type('{downArrow}{downArrow}{enter}')
      //cy.wrap(doc.find('#ccExpMonth')).type('01 [Jan]')
      //cy.wrap(doc.find('#ccExpMonth')).select('option').eq(1)
      //cy.wrap(doc.find('option[value="12"]')).select()
      //cy.wrap(doc.get("#ccExpYear")).click()
      //cy.wrap(doc.get('option[value="25"]')).click()
      
      cy.wrap(doc.find("#cardCvv2")).type('000')

      cy.wrap(doc.find("#_submit")).click()
      
    })

    cy.wait(20000)
 

  });
});

describe('[MASTERCARD] Login and then successfully change payment method', () => {
  it('Login with a pre-existing user account and then change the payment card associated with the account', () => {

    const currentDate = new Date().toISOString().replace(/[\-\.\:ZT]/g,"").substr(2,10);

    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[name="bssUsername"]').type('testuser100523@cubic.com');
  
    cy.get('input[name="bssPassword"]').type('Password1');

    cy.get('button[type="Submit"]').click();

    cy.wait(2000);

    cy.contains("Account information")

    cy.get('span[class="sc-cx1xxi-0 bOlEzG"]').eq(7).click();

    cy.get('input[name="billing.country"]').click();

    //cy.get('ul li:first').click();
 
    cy.get('input[name="billing.addressLine1"]').clear().type("10");

    cy.get('input[name="billing.addressLine2"]').clear().type("Test Street "+currentDate);

    cy.get('input[name="billing.city"]').clear().type("City "+currentDate);
 
    cy.get('input[name="billing.region"]').clear().type("Testshire "+currentDate);

    cy.get('input[name="billing.postalCode"]').clear().type("SE100ES");

    cy.get('span[class="sc-cx1xxi-0 bOlEzG"]').click();

    //This is the area of contentious area!

    //getIframeBody().find('input[id="cardholderName"]').should('exist');
    cy.get('svg[class="core-ui-rtl-animation"]',{ timeout: 10000 }).should('be.visible'); //wait for loading spinner to appear
 
    cy.get('svg[class="core-ui-rtl-animation"]', { timeout: 10000 }).should('not.exist'); //wait for it to disappear
 
    cy.get('iframe[id="iFrameResizer1"]').then(($ifrom) =>{
      const doc = $ifrom.contents()
      cy.wrap(doc.find("#cardholderName")).type('MM Automation')
      cy.wrap(doc.find("#email")).clear().type('testuser100523@cubic.com')
      cy.wrap(doc.find("#ccNumber")).clear().type('4929400427277506')
      cy.wait(1000);

      cy.wrap(doc.find('#ccExpMonth')).select('12').should('have.value', '12')
      cy.wrap(doc.find('#ccExpYear')).select('28').should('have.value', '28')

      //Not working for click when wrapped in iFrame
      //cy.wrap(doc.find('#ccExpMonth')).type('{downArrow}{downArrow}{enter}')
      //cy.wrap(doc.find('#ccExpMonth')).type('01 [Jan]')
      //cy.wrap(doc.find('#ccExpMonth')).select('option').eq(1)
      //cy.wrap(doc.find('option[value="12"]')).select()
      //cy.wrap(doc.get("#ccExpYear")).click()
      //cy.wrap(doc.get('option[value="25"]')).click()
      
      cy.wrap(doc.find("#cardCvv2")).type('000')

      cy.wrap(doc.find("#_submit")).click()
      
    })

    cy.wait(20000)
 

  });
});

describe('[AMEX] Login and then successfully change payment method', () => {
  it('Login with a pre-existing user account and then change the payment card associated with the account', () => {

    const currentDate = new Date().toISOString().replace(/[\-\.\:ZT]/g,"").substr(2,10);

    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[name="bssUsername"]').type('testuser100523@cubic.com');
  
    cy.get('input[name="bssPassword"]').type('Password1');

    cy.get('button[type="Submit"]').click();

    cy.wait(2000);

    cy.contains("Account information")

    cy.get('span[class="sc-cx1xxi-0 bOlEzG"]').eq(7).click();

    cy.get('input[name="billing.country"]').click();

    //cy.get('ul li:first').click();
 
    cy.get('input[name="billing.addressLine1"]').clear().type("10");

    cy.get('input[name="billing.addressLine2"]').clear().type("Test Street "+currentDate);

    cy.get('input[name="billing.city"]').clear().type("City "+currentDate);
 
    cy.get('input[name="billing.region"]').clear().type("Testshire "+currentDate);

    cy.get('input[name="billing.postalCode"]').clear().type("SE100ES");

    cy.get('span[class="sc-cx1xxi-0 bOlEzG"]').click();

    //This is the area of contentious area!

    //getIframeBody().find('input[id="cardholderName"]').should('exist');
    cy.get('svg[class="core-ui-rtl-animation"]',{ timeout: 10000 }).should('be.visible'); //wait for loading spinner to appear
 
    cy.get('svg[class="core-ui-rtl-animation"]', { timeout: 10000 }).should('not.exist'); //wait for it to disappear
 
    cy.get('iframe[id="iFrameResizer1"]').then(($ifrom) =>{
      const doc = $ifrom.contents()
      cy.wrap(doc.find("#cardholderName")).type('MM Automation')
      cy.wrap(doc.find("#email")).clear().type('testuser100523@cubic.com')
      cy.wrap(doc.find("#ccNumber")).clear().type('4929400427277506')
      cy.wait(1000);

      cy.wrap(doc.find('#ccExpMonth')).select('12').should('have.value', '12')
      cy.wrap(doc.find('#ccExpYear')).select('28').should('have.value', '28')

      //Not working for click when wrapped in iFrame
      //cy.wrap(doc.find('#ccExpMonth')).type('{downArrow}{downArrow}{enter}')
      //cy.wrap(doc.find('#ccExpMonth')).type('01 [Jan]')
      //cy.wrap(doc.find('#ccExpMonth')).select('option').eq(1)
      //cy.wrap(doc.find('option[value="12"]')).select()
      //cy.wrap(doc.get("#ccExpYear")).click()
      //cy.wrap(doc.get('option[value="25"]')).click()
      
      cy.wrap(doc.find("#cardCvv2")).type('000')

      cy.wrap(doc.find("#_submit")).click()
      
    })

    cy.wait(20000)
 

  });
});