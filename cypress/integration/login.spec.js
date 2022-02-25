describe('login errors', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login?lang=en');
    });

    it('should throw email or password incorrect error', () => {
        cy.loginFakeCredentials();

        cy.get('#invalid_credentials').should('be.visible');
    });

    it('should throw inactive account error', () => {
        cy.loginInactiveAccount();

        cy.get('#inactive_account').should('be.visible');
    });
});
