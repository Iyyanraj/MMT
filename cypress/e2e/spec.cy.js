describe('Login test', () => {
  it('Valid login', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');

    cy.get('input#username').type('student');

    cy.get('[id="password"]').type('Password123');
    cy.get('[id="submit"]').click()
    cy.url().should('include','https://practicetestautomation.com/logged-in-successfully/')
    cy.get('p strong').should('have.text','Congratulations student. You successfully logged in!')
    cy.get('a[href*="practice-test-login/"]').should('be.visible')
  })
  it('Validate negative login 1',()=>{
    cy.visit('https://practicetestautomation.com/practice-test-login/');

    cy.get('input#username').type('incorrectUser');

    cy.get('[id="password"]').type('Password123');
    cy.get('[id="submit"]').click()
    cy.get('[id="error"]').should('be.visible')
  
    cy.get('[id="error"]').should('have.text','Your username is invalid!')
})
  it('Validate negative login 2',()=>{
    cy.visit('https://practicetestautomation.com/practice-test-login/');

    cy.get('input#username').type('student');

    cy.get('[id="password"]').type('Password12');
    cy.get('[id="submit"]').click()
    cy.get('[id="error"]').should('be.visible')
  
    cy.get('[id="error"]').should('have.text','Your username is invalid!')



    })


  });

