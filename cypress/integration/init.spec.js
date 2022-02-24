describe('Init Random data Test', () => {
    it('Prepare initial user data', () => {
        const user = {
            username: cy.faker.name.firstName(),
            email: cy.faker.internet.email(),
            password: cy.faker.internet.password(),
            phone: '12345678',
        };
        cy.writeFile('cypress/fixtures/user.json', user);
    });
});
