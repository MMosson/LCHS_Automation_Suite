
describe('[Admin] Successful login with Valid Details', () => {
  it('Login to the BSS Console as an Admin user with valid details', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1");

    cy.contains("Log in").click();
    //cy.contains('div[class="sc-btn ui-button ui-corner-all ui-widget"]').eq(1).click();

    cy.wait(2000);

    cy.get('h1').contains("Home Page");
  })
})

describe('Search for an account using email', () => {
  it('Admin user logs in and then navigates to Account Information, searching for an account using the accounts email', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1");

    cy.contains("Log in").click();
    //cy.contains('div[class="sc-btn ui-button ui-corner-all ui-widget"]').eq(1).click();

    cy.wait(2000);

    cy.get('h1').contains("Home Page");

    cy.contains("Customer Service").click();

    cy.contains("Account Management").click();

    cy.contains("To view data, select your filter criteria and click on Refresh.");

    cy.get('input').eq(1).clear().type("testuser100523@cubic.com");

    cy.contains("Refresh").click()
    
    //Environment E Specific Data!!!! If doing this in Env A, this would have to change!
    cy.contains("H6H6UMQU");
  })
})

describe('Search for an account using name', () => {
  it('Admin user logs in and then navigates to Account Information, searching for an account using the accounts name', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1");

    cy.contains("Log in").click();
    //cy.contains('div[class="sc-btn ui-button ui-corner-all ui-widget"]').eq(1).click();

    cy.wait(2000);

    cy.get('h1').contains("Home Page");

    cy.contains("Customer Service").click();

    cy.contains("Account Management").click();

    cy.contains("To view data, select your filter criteria and click on Refresh.");

    cy.get('input').eq(0).clear().type("Mike Automation");

    cy.contains("Refresh").click()
    
    //Environment E Specific Data!!!! If doing this in Env A, this would have to change!
    cy.contains("6PWCSASQ");
  })
})

describe('Search for an account using Card Number', () => {
  it('Admin user logs in and then navigates to Account Information, searching for an account using the accounts Card Number', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1");

    cy.contains("Log in").click();
    //cy.contains('div[class="sc-btn ui-button ui-corner-all ui-widget"]').eq(1).click();

    cy.wait(2000);

    cy.get('h1').contains("Home Page");

    cy.contains("Customer Service").click();

    cy.contains("Account Management").click();

    cy.contains("To view data, select your filter criteria and click on Refresh.");

    cy.get('input').eq(5).type("541333");
    cy.get('input').eq(6).type("4432");

    cy.contains("Refresh").click()
    
    //Environment E Specific Data!!!! If doing this in Env A, this would have to change!
    cy.contains("The search returned no data").should('not.exist');
  })
})