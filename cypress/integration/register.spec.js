describe('register errors', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/signup');
    });

    it('should throw email or password incorrect error', () => {
        cy.registerExistingAccount();

        cy.get('#already_exists_account').should('be.visible');
    });

    it('should throw inactive account error', () => {
        cy.registerInactiveAccount();

        cy.get('#inactive_account').should('be.visible');
    });
});
