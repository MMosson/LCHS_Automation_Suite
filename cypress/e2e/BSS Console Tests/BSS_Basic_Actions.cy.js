
describe('[Admin] Successful login with Valid Details', () => {
  it('Login to the BSS Console as an Admin user with valid details', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1!");

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

    cy.get('input[id="password_input"]').clear().type("Password1!");

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

    cy.contains("The search returned no data").should('not.exist');
  })
})

describe('Search for an account using name', () => {
  it('Admin user logs in and then navigates to Account Information, searching for an account using the accounts name', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1!");

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

    cy.contains("The search returned no data").should('not.exist');
  })
})

describe('Search for an account using Card Number', () => {
  it('Admin user logs in and then navigates to Account Information, searching for an account using the accounts Card Number', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1!");

    cy.contains("Log in").click();
    //cy.contains('div[class="sc-btn ui-button ui-corner-all ui-widget"]').eq(1).click();

    cy.wait(2000);

    cy.get('h1').contains("Home Page");

    cy.contains("Customer Service").click();

    cy.contains("Account Management").click();

    cy.contains("To view data, select your filter criteria and click on Refresh.");

    cy.get('input').eq(6).type("541333");
    cy.get('input').eq(7).type("4432");

    cy.contains("Refresh").click()
    
    //Environment E Specific Data!!!! If doing this in Env A, this would have to change!
    cy.contains("The search returned no data").should('not.exist');
  })
})

describe('Search for an account using an invalid Card Number', () => {
  it('Admin user logs in and then navigates to Account Information, searching for a card number which is not linked to any account', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1!");

    cy.contains("Log in").click();
    //cy.contains('div[class="sc-btn ui-button ui-corner-all ui-widget"]').eq(1).click();

    cy.wait(2000);

    cy.get('h1').contains("Home Page");

    cy.contains("Customer Service").click();

    cy.contains("Account Management").click();

    cy.contains("To view data, select your filter criteria and click on Refresh.");

    cy.get('input').eq(6).type("123456");
    cy.get('input').eq(7).type("1234");

    cy.contains("Refresh").click()
    
    //Environment E Specific Data!!!! If doing this in Env A, this would have to change!
    cy.contains("The search returned no data").should('exist');
  })
})

describe('Search for an account using Member Key Number', () => {
  it('Admin user logs in and then navigates to Account Information, searching for an account using the accounts Member Key Number', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1!");

    cy.contains("Log in").click();
    //cy.contains('div[class="sc-btn ui-button ui-corner-all ui-widget"]').eq(1).click();

    cy.wait(2000);

    cy.get('h1').contains("Home Page");

    cy.contains("Customer Service").click();

    cy.contains("Account Management").click();

    cy.contains("To view data, select your filter criteria and click on Refresh.");

    cy.get('input').eq(4).type("7000021");
    
    cy.contains("Refresh").click()
    
    //Environment E Specific Data!!!! If doing this in Env A, this would have to change!
    cy.contains("The search returned no data").should('not.exist');
  })
})

describe('Search for an account using Account Number', () => {
  it('Admin user logs in and then navigates to Account Information, searching for an account using the accounts Account Number', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1!");

    cy.contains("Log in").click();
    //cy.contains('div[class="sc-btn ui-button ui-corner-all ui-widget"]').eq(1).click();

    cy.wait(2000);

    cy.get('h1').contains("Home Page");

    cy.contains("Customer Service").click();

    cy.contains("Account Management").click();

    cy.contains("To view data, select your filter criteria and click on Refresh.");

    cy.get('input').eq(2).type("6PWCSASQ");
    
    cy.contains("Refresh").click();
    
    //Environment E Specific Data!!!! If doing this in Env A, this would have to change!
    cy.contains("The search returned no data").should('not.exist');
  })
})

describe('Search for an account using Account Number and view the account', () => {
  it('Admin user logs in and then navigates to Account Information, searching for an account using the accounts Account Number, then the admin user selects the account and views its details', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1!");

    cy.contains("Log in").click();
    //cy.contains('div[class="sc-btn ui-button ui-corner-all ui-widget"]').eq(1).click();

    cy.wait(2000);

    cy.get('h1').contains("Home Page");

    cy.contains("Customer Service").click();

    cy.contains("Account Management").click();

    cy.contains("To view data, select your filter criteria and click on Refresh.");

    cy.get('input').eq(2).type("6PWCSASQ"); //Environment E Specific Data!!!! If doing this in Env A, this would have to change!
    
    cy.contains("Refresh").click();
    
    //Environment E Specific Data!!!! If doing this in Env A, this would have to change!
    cy.contains("The search returned no data").should('not.exist');

    cy.contains("6PWCSASQ").click(); //Environment E Specific Data!!!! If doing this in Env A, this would have to change!

    cy.contains("Member account #6PWCSASQ"); //Environment E Specific Data!!!! If doing this in Env A, this would have to change!

    cy.contains("Mike Automation")

  })
})

describe('Search for an account using Account Number and view the account', () => {
  it('Admin user logs in and then navigates to Account Information, searching for an account using the accounts Account Number, then the admin user selects the account and views its details', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1!");

    cy.contains("Log in").click();
    //cy.contains('div[class="sc-btn ui-button ui-corner-all ui-widget"]').eq(1).click();

    cy.wait(2000);

    cy.get('h1').contains("Home Page");

    cy.contains("Customer Service").click();

    cy.contains("Account Management").click();

    cy.contains("To view data, select your filter criteria and click on Refresh.");

    cy.get('input').eq(2).type("6PWCSASQ"); //Environment E Specific Data!!!! If doing this in Env A, this would have to change!
    
    cy.contains("Refresh").click();
    
    //Environment E Specific Data!!!! If doing this in Env A, this would have to change!
    cy.contains("The search returned no data").should('not.exist');

    cy.contains("6PWCSASQ").click(); //Environment E Specific Data!!!! If doing this in Env A, this would have to change!

    cy.contains("Member account #6PWCSASQ"); //Environment E Specific Data!!!! If doing this in Env A, this would have to change!

    cy.contains("Mike Automation")

  })
})

describe('View rentals page and search for rental with creation date', () => {
  it('Admin user logs in and then navigates to Account Information, searching for an account using the accounts Account Number, then the admin user selects the account and views its details', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1!");

    cy.contains("Log in").click();
    //cy.contains('div[class="sc-btn ui-button ui-corner-all ui-widget"]').eq(1).click();

    cy.wait(2000);

    cy.get('h1').contains("Home Page");

    cy.contains("Customer Service").click();

    cy.get('a[data-view-id="BikeRental"]').click()

    cy.wait(3000);

    //cy.get('Select[class="select2-hidden-accessible"]').eq(2).click();

    cy.get('Select[class="select2-hidden-accessible"]').eq(2).select('THIS_YEAR')//.should('have.value', 'THIS_YEAR')
    //cy.get('#generate-level').select(1).should('have.value', '1');

    cy.wait(10000);

  })
})
