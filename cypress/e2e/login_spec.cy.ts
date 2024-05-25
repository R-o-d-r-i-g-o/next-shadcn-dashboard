describe('template spec', () => {
  it('should load login page successfully', () => {
    cy.visit('/');
    cy.request('/').its('status').should('eq', 200);

    // has man text in page
    cy.contains('Create an account').should('exist');

    // has continue button
    cy.contains('Continue With Email').should('exist');
  });

  it('should sign in successfully', () => {
    cy.visit('/');

    // Note: there's mocked a value initially
    // verify if a input text accepts being write.
    cy.get('input[value="demo@gmail.com"]').clear().type('rodrigo@gmail.com');

    // continue by acessing main dashboard
    cy.contains('Continue With Email').click();
  });
});
