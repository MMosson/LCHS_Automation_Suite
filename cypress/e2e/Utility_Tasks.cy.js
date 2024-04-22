describe('Change accounts card number', () => {
  it('Frees up a card for use by getting a fake card number from an online generator', () => {
    
    var desired_card_number = "4929403325221535"//PUT THE CARD NUMBER YOU WANT IN HERE

    let first_six = desired_card_number.slice(0,6)
    let last_four = desired_card_number.slice(desired_card_number.length-4,desired_card_number.length)

    cy.log(first_six)
    cy.log(last_four)

    cy.visit('https://www.creditcardvalidator.org/generator');

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })

    cy.get('#generate-level').select(1).should('have.value', '1');

    cy.contains('Generate Credit Card Numbers').click();

    cy.get('#generated_cards').invoke('val').then(sometext => cy.log(sometext));
    
    cy.wait(5000)

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

    cy.get('input').eq(6).type(first_six);
    cy.get('input').eq(7).type(last_four);
    
    cy.contains("Refresh").click();
    
    //Environment E Specific Data!!!! If doing this in Env A, this would have to change!
    cy.contains("The search returned no data").should('not.exist');

    

  })
})