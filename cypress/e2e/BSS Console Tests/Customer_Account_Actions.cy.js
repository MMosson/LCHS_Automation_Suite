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

      cy.contains("Buy rental product(s)").click()

      //cy.wait(4000);

      cy.get('div[class="sc-quote-data sc-subscription-select"').click()//.select('THIS_YEAR')
      //chooses wrong membership but alas, we will push on and fix this soon
      cy.get('ul').children().eq(9).click();

      cy.contains('Process payment').click()

      cy.wait(3000)

      cy.contains('The payment was accepted.')

      //cy.contains('Close').eq(10).click()
      //cy.get('button[class="ui-button ui-corner-all ui-widget"]').eq(1).click()
      //cy.get('button').contains('Close').click()
      cy.reload()

      cy.wait(2000)

      cy.contains('Cancel membership').click()

      //cy.get('textarea').type('Automated testing cancelling of the membership')
      cy.get('div[id="ciddff4"]').click().type("Automated testing cancelling of the membership")
      
      cy.contains('Confirm').click()

      cy.contains('Cancelled')
    })
  })