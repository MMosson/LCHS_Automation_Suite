describe('Login, navigate to customer service > account management, search for user - card details', () => {
  it('Login with admin account to BSS Console, Navigate to Customer Service > Account Mangement and then seach for an existing user using card details', () => {
    
    cy.visit('https://e-bss-test.cubic-hub.com:8443/solstice/main',{failOnStatusCode: false});

    cy.get('input[id="username_input"]').clear().type("MichaelM");

    cy.get('input[id="password_input"]').clear().type("Password1");

    cy.contains('div[class="sc-btn ui-button ui-corner-all ui-widget"]').eq(1).click();

    cy.wait(2000);

    cy.get('h1').contains("Home Page");
  })
})