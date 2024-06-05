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

    cy.wait(2000);
    cy.contains('User').click();

    cy.wait(2000);
    cy.contains('Employee').click();

    cy.get(
      'button[class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"]'
    ).click();
    cy.wait(2000);
    cy.get('[role="menuitem"]').first().click();

    cy.wait(2000);
    cy.contains('Profile').click();

    cy.log('O tamanho da tela foi alterado');
    cy.viewport(1280, 720);

    cy.wait(2000);
    cy.contains('Kanban').click();

    cy.wait(2000);
    cy.contains('Login').click();
  });
});
