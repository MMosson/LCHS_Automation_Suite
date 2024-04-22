describe('Sauce Labs Login Test', () => {
  it('Successfully logs into the Sauce Labs Website', () => {
    
    cy.visit('https://www.saucedemo.com/')

    cy.get('Input[id="user-name"]').type("standard_user")

    cy.get('Input[name="password"]').type("secret_sauce")

    cy.get('Input[id="login-button"]').click()

    cy.contains("Products")

    //cy.wait(5000)

  })
})

describe('Login to Sauce Labs add product to basket', () => {
  it('Successfully Logs in to Sauce Labs add product to basket', () => {
    
    cy.visit('https://www.saucedemo.com/')

    cy.get('Input[id="user-name"]').type("standard_user")

    cy.get('Input[name="password"]').type("secret_sauce")

    cy.get('Input[id="login-button"]').click()

    cy.contains("Products")

    cy.wait(1000)

    cy.get('button[id="add-to-cart-sauce-labs-fleece-jacket"]').click()
    
    cy.get('a[class="shopping_cart_link"]').click()

    cy.wait(3000)

  })
})