
describe('Login and then logout', () => {
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

    cy.contains("Account information")

    cy.wait(2000);

    cy.get('button[class="LinkStyleButton-sc-128l2m9-0 dIteZj"]').click();

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

    cy.contains("Account information")

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
  .get('iframe[id="iFrameResizer1"]')
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

describe('Login and then change payment method', () => {
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

    cy.wait(2000);

    cy.get('span[class="sc-cx1xxi-0 bOlEzG"]').eq(7).click();

    cy.wait(1000);

    cy.get('input[name="billing.country"]').click();

    cy.get('ul li:first').click();
 
    cy.get('input[name="billing.addressLine1"]').clear().type("10");

    cy.get('input[name="billing.addressLine2"]').clear().type("Test Street "+currentDate);

    cy.get('input[name="billing.city"]').clear().type("City "+currentDate);
 
    cy.get('input[name="billing.region"]').clear().type("Testshire "+currentDate);

    cy.get('input[name="billing.postalCode"]').clear().type("SE100ES");
 
    cy.wait(2000);

    cy.get('span[class="sc-cx1xxi-0 bOlEzG"]').click();

    cy.wait(1000);

    //getIframeBody().find('#cardholderName').should('exist');

    //getIframeBody().find('input').clear().type("Mike Automation");

    cy.get('input[id="cardholderName"]').clear().type("Mike Automation");

    cy.get('input[id="email"]').clear().type("TestUser100523@cubic.com");

    cy.get('input[id="ccNumber"]').clear().type("5434581463325351");

    cy.get('select [id="ccExpMonth"]').click();

    cy.get('ul li:last').eq(0).click();

    cy.wait(3000);


  });
});