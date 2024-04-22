//const { now } = require("cypress/types/lodash");

//Successful login test

describe('Successful login with pre-existing customer account', () => {
  it('Successful Login with pre-existing customer account', () => {
    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[name="bssUsername"]').clear().type('testuser100523@cubic.com');
  
    cy.get('input[name="bssPassword"]').clear().type('Password1');

    cy.get('button[type="Submit"]').click();

    cy.wait(2000);

    cy.contains("Account information")
  });
});

//Failed login test 
describe('Failed Login, wrong password', () => {
  it('Failed login with correct email, incorrect password', () => {
    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[name="bssUsername"]').type('testuser100523@cubic.com');
  
    cy.get('input[name="bssPassword"]').type('IncorrectPassword');

    cy.get('button[type="Submit"]').click();

    cy.contains("Your username or password was incorrect")

  });
});

//Failed login test 
describe('Failed Login, wrong username and password', () => {
  it('Failed login with wrong username and wrong password', () => {
    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[name="bssUsername"]').type('FailedLogin@cubic.com');
  
    cy.get('input[name="bssPassword"]').type('IncorrectPassword');
    
    cy.get('button[type="Submit"]').should('be.visible');

    cy.get('button[type="Submit"]', {retries: 3}).click();

    cy.contains("Your username or password was incorrect")

  });
});

describe('Failed Login, no username or password', () => {
  it('Failed login the username and password fields are not populated by the user', () => {
    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('button[type="Submit"]').click();

    cy.contains("Username is required")

    cy.contains("Password is required")

  });
});

describe('Failed Login, has username no password', () => {
  it('Failed login the password field is not populated by the user', () => {
    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[name="bssUsername"]').type('FailedLogin@cubic.com');

    cy.get('button[type="Submit"]').click();

    cy.contains("Password is required")


  });
});

describe('Failed Login, no username but has password', () => {
  it('Failed login the username field is not populated by the user', () => {
    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[name="bssPassword"]').type('IncorrectPassword');

    cy.get('button[type="Submit"]').click();

    cy.contains("Username is required")

  });
});

describe('Create new account', () => {
  it('Create a new account', () => {
    // Visit the WLW
    cy.visit('https://e-wlw-test.cubic-hub.com/');

    //Need to add this because lyft devs are useless
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.contains("Sign up").click();

    cy.get('Input[Id="firstName__field"]').type("Test");

    const currentDate = new Date().toISOString().replace(/[\-\.\:ZT]/g,"").substr(2,10);
    var surname = "User" +currentDate;

    cy.get('Input[id="lastName__field"]').type(surname)

    cy.get('Input[id="email__field"]').type("Test"+surname+"@cubic.com")

    cy.get('Input[id="phoneNumber__field"]').type("07000000000")

    cy.get('Input[id="password__field"]').type("Password1")

    cy.get('Input[id="confirmPassword__field"]').type("Password1")

    //cy.get('Select[id="securityQuestion__field"]').select("Where was your first holiday?")

    cy.get('Input[name="securityQuestion"]').click();

    cy.get('Input[name="securityQuestion"]').click();

    //cy.get('Input[name="securityQuestion"]').type('{downArrow} {downArrow}')

    //IMPORTANT YOU NEED TO REMEMBER THIS WHEN SELECTING OPTIONS FROM A LYFT DROPDOWN
    cy.get('ul li:first').click();

    //cy.xpath()

    cy.get('Input[id="securityAnswer__field"]').type("Mike");

    cy.get('Input[id="tosAgreedTo_0"]').click();
    
    cy.wait(1000)

    cy.get('button[type="Submit"]').click();

    cy.contains("Account information");

  });
});